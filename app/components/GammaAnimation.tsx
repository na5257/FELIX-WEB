"use client";

import { useEffect, useRef } from "react";

interface Color {
  r: number;
  g: number;
  b: number;
}

// Yeo 7-network parcellation — MNI centroids projected to left-hemisphere lateral view.
// Source: Table 2, Neuropsychopharmacology (2017) doi:10.1038/npp.2017.103
// Projection: illust_x = 0.08 + (70 - MNI_y)/170 * 0.82
//             illust_y = 0.08 + (70 - MNI_z)/110 * 0.77
// Only laterally-visible nodes (|MNI x| > ~20) included.
const NETS: Record<string, { base: Color; glow: Color; freq: number }> = {
  FP: { base: { r: 40, g: 150, b: 40 }, glow: { r: 70, g: 230, b: 70 }, freq: 0.3825 },
  DA: { base: { r: 20, g: 140, b: 190 }, glow: { r: 50, g: 210, b: 255 }, freq: 0.272 },
  SN: { base: { r: 160, g: 40, b: 100 }, glow: { r: 230, g: 70, b: 150 }, freq: 0.4675 },
};

const NODES = [
  // Frontoparietal Control (CEN) — MNI centroids
  { x: 0.24, y: 0.44, net: "FP", sz: 0.9 },  // 0  DLPFC (BA 9/10/46) MNI(-40, 36, 19)
  { x: 0.35, y: 0.17, net: "FP", sz: 0.8 },  // 1  Dorsal MFG (BA 6) MNI(-23, 14, 58)
  { x: 0.67, y: 0.24, net: "FP", sz: 1.0 },  // 2  IPL (BA 40) MNI(-43, -52, 48)

  // Dorsal Attention
  { x: 0.68, y: 0.21, net: "DA", sz: 0.9 },  // 3  SPL (BA 2/7) MNI(-28, -54, 52)
  { x: 0.44, y: 0.19, net: "DA", sz: 0.8 },  // 4  FEF (BA 6) MNI(-26, -4, 55)
  { x: 0.40, y: 0.35, net: "DA", sz: 0.9 },  // 5  IFG (BA 9) MNI(-49, 4, 32)

  // Salience / Ventral Attention
  { x: 0.57, y: 0.37, net: "SN", sz: 0.9 },  // 6  IPL (BA 40) MNI(-59, -32, 28)
  { x: 0.22, y: 0.35, net: "SN", sz: 0.8 },  // 7  SFG (BA 9) MNI(-29, 42, 31)
  { x: 0.68, y: 0.47, net: "SN", sz: 0.7 },  // 8  STG (BA 22) MNI(-56, -55, 12)
];

const CROSS_CONN = [
  [1, 4], [2, 3], [0, 7], [5, 6], [2, 6], [0, 5], [4, 7], [3, 8],
];

function buildConnections() {
  const within: [number, number, number][] = [];
  for (let i = 0; i < NODES.length; i++)
    for (let j = i + 1; j < NODES.length; j++)
      if (NODES[i].net === NODES[j].net) {
        const dx = NODES[i].x - NODES[j].x, dy = NODES[i].y - NODES[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 0.45) within.push([i, j, d]);
      }
  return within;
}

function seededRandom(seed: number) {
  let s = seed;
  return () => { s = (s * 16807 + 0) % 2147483647; return s / 2147483647; };
}

export default function GammaAnimation({ leftLabel, rightLabel }: { leftLabel: string; rightLabel: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const CSS_W = canvas.clientWidth;
    const CSS_H = canvas.clientHeight;
    canvas.width = CSS_W * dpr;
    canvas.height = CSS_H * dpr;
    ctx.scale(dpr, dpr);

    const W = CSS_W, H = CSS_H, halfW = W / 2;

    const brainImg = new Image();
    brainImg.src = "/brain-base.png";
    let imgReady = false;
    brainImg.onload = () => { imgReady = true; };

    const withinConn = buildConnections();

    const rand = seededRandom(42);
    const dysPhase = NODES.map(() => rand() * Math.PI * 2);
    const dysFreq = NODES.map(() => 0.13 + rand() * 0.765);
    const dysAmp = NODES.map(() => 0.25 + rand() * 0.55);

    const allDysConn = [...withinConn.map(([i, j]) => [i, j]), ...CROSS_CONN];
    const dysConnReachFreq = allDysConn.map(() => 0.15 + rand() * 0.4);
    const dysConnReachPhase = allDysConn.map(() => rand() * Math.PI * 2);
    const dysConnMaxReach = allDysConn.map(() => 0.30 + rand() * 0.35);

    function pulse(t: number, f: number, p: number) {
      const raw = 0.5 + 0.5 * Math.sin(t * f * Math.PI * 2 + p);
      return raw * raw * (3 - 2 * raw);
    }

    function brainClipPath(c: CanvasRenderingContext2D, ox: number, oy: number, bw: number, bh: number) {
      const p = (rx: number, ry: number): [number, number] => [ox + rx * bw, oy + ry * bh];
      c.beginPath();
      c.moveTo(...p(0.08, 0.52));
      c.bezierCurveTo(...p(0.04, 0.46), ...p(0.02, 0.38), ...p(0.03, 0.30));
      c.bezierCurveTo(...p(0.04, 0.22), ...p(0.08, 0.15), ...p(0.14, 0.10));
      c.bezierCurveTo(...p(0.20, 0.06), ...p(0.28, 0.03), ...p(0.36, 0.02));
      c.bezierCurveTo(...p(0.44, 0.01), ...p(0.52, 0.01), ...p(0.60, 0.03));
      c.bezierCurveTo(...p(0.68, 0.05), ...p(0.74, 0.08), ...p(0.80, 0.14));
      c.bezierCurveTo(...p(0.86, 0.20), ...p(0.90, 0.28), ...p(0.92, 0.36));
      c.bezierCurveTo(...p(0.93, 0.42), ...p(0.92, 0.48), ...p(0.90, 0.52));
      c.bezierCurveTo(...p(0.88, 0.56), ...p(0.84, 0.58), ...p(0.80, 0.58));
      c.bezierCurveTo(...p(0.82, 0.62), ...p(0.86, 0.68), ...p(0.86, 0.74));
      c.bezierCurveTo(...p(0.86, 0.80), ...p(0.82, 0.86), ...p(0.76, 0.88));
      c.bezierCurveTo(...p(0.70, 0.90), ...p(0.62, 0.90), ...p(0.56, 0.86));
      c.bezierCurveTo(...p(0.50, 0.82), ...p(0.46, 0.78), ...p(0.44, 0.74));
      c.bezierCurveTo(...p(0.42, 0.78), ...p(0.40, 0.84), ...p(0.38, 0.90));
      c.bezierCurveTo(...p(0.36, 0.92), ...p(0.34, 0.92), ...p(0.32, 0.90));
      c.bezierCurveTo(...p(0.30, 0.86), ...p(0.30, 0.80), ...p(0.32, 0.74));
      c.bezierCurveTo(...p(0.28, 0.72), ...p(0.22, 0.68), ...p(0.18, 0.64));
      c.bezierCurveTo(...p(0.14, 0.60), ...p(0.10, 0.56), ...p(0.08, 0.52));
      c.closePath();
    }

    function drawNode(c: CanvasRenderingContext2D, cx: number, cy: number, intensity: number, base: Color, glow: Color, sz: number) {
      const maxR = 40 * sz;

      c.save();
      c.shadowColor = `rgba(${Math.max(0, base.r - 40)},${Math.max(0, base.g - 40)},${Math.max(0, base.b - 40)},${0.15 * intensity})`;
      c.shadowBlur = 12 * intensity;
      c.shadowOffsetX = 1; c.shadowOffsetY = 2;
      c.beginPath(); c.arc(cx, cy, 4 * sz, 0, Math.PI * 2);
      c.fillStyle = "rgba(0,0,0,0.01)"; c.fill();
      c.restore();

      for (let r = 11; r >= 0; r--) {
        const rr = 3 + (maxR - 3) * (r / 11) * intensity;
        const ra = (0.38 - r * 0.028) * intensity;
        if (ra <= 0 || rr < 1) continue;
        const g = c.createRadialGradient(cx, cy, 0, cx, cy, rr);
        g.addColorStop(0, `rgba(${glow.r},${glow.g},${glow.b},${ra})`);
        g.addColorStop(0.25, `rgba(${glow.r},${glow.g},${glow.b},${ra * 0.65})`);
        g.addColorStop(0.55, `rgba(${glow.r},${glow.g},${glow.b},${ra * 0.25})`);
        g.addColorStop(1, `rgba(${glow.r},${glow.g},${glow.b},0)`);
        c.beginPath(); c.arc(cx, cy, rr, 0, Math.PI * 2); c.fillStyle = g; c.fill();
      }

      const cr = (3.5 + intensity * 5.5) * sz;
      const cg = c.createRadialGradient(cx - cr * .22, cy - cr * .22, cr * .08, cx + cr * .05, cy + cr * .05, cr * 1.1);
      cg.addColorStop(0, `rgba(${Math.min(255, base.r + 120)},${Math.min(255, base.g + 120)},${Math.min(255, base.b + 120)},${.7 + intensity * .3})`);
      cg.addColorStop(0.3, `rgba(${Math.min(255, base.r + 60)},${Math.min(255, base.g + 60)},${Math.min(255, base.b + 60)},${.6 + intensity * .4})`);
      cg.addColorStop(0.6, `rgba(${base.r},${base.g},${base.b},${.55 + intensity * .45})`);
      cg.addColorStop(0.85, `rgba(${Math.max(0, base.r - 30)},${Math.max(0, base.g - 30)},${Math.max(0, base.b - 30)},${.45 + intensity * .4})`);
      cg.addColorStop(1, `rgba(${Math.max(0, base.r - 50)},${Math.max(0, base.g - 50)},${Math.max(0, base.b - 50)},${.3 + intensity * .3})`);
      c.beginPath(); c.arc(cx, cy, cr, 0, Math.PI * 2); c.fillStyle = cg; c.fill();

      const hlG = c.createRadialGradient(cx - cr * .25, cy - cr * .3, 0, cx - cr * .25, cy - cr * .3, cr * .5);
      hlG.addColorStop(0, `rgba(255,255,255,${intensity * 0.6})`);
      hlG.addColorStop(0.5, `rgba(255,255,255,${intensity * 0.2})`);
      hlG.addColorStop(1, "rgba(255,255,255,0)");
      c.beginPath(); c.arc(cx - cr * .25, cy - cr * .3, cr * .5, 0, Math.PI * 2); c.fillStyle = hlG; c.fill();

      const rimG = c.createRadialGradient(cx + cr * .1, cy + cr * .2, cr * .6, cx + cr * .1, cy + cr * .2, cr * 1.05);
      rimG.addColorStop(0, "rgba(255,255,255,0)");
      rimG.addColorStop(0.8, `rgba(${glow.r},${glow.g},${glow.b},${intensity * 0.08})`);
      rimG.addColorStop(1, `rgba(${glow.r},${glow.g},${glow.b},${intensity * 0.15})`);
      c.beginPath(); c.arc(cx, cy, cr * 1.05, 0, Math.PI * 2); c.fillStyle = rimG; c.fill();
    }

    function drawConn(c: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, intensity: number, col: Color, thick: number) {
      c.save();
      c.shadowColor = `rgba(${col.r},${col.g},${col.b},${intensity * 0.3})`;
      c.shadowBlur = 6 * intensity;
      c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2);
      c.strokeStyle = `rgba(${col.r},${col.g},${col.b},${.10 + intensity * .45})`;
      c.lineWidth = thick * (.5 + intensity * 1.8); c.lineCap = "round"; c.stroke();
      c.restore();
    }

    function drawConnReaching(c: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, reach: number, intensity: number, col: Color) {
      if (reach < 0.01 || intensity < 0.01) return;
      const dx = x2 - x1, dy = y2 - y1;
      const ex1 = x1 + dx * reach, ey1 = y1 + dy * reach;
      const ex2 = x2 - dx * reach, ey2 = y2 - dy * reach;
      const alpha = .15 + intensity * .55;
      const lw = 1.0 + intensity * 2.0;

      c.save(); c.lineCap = "round";
      c.shadowColor = `rgba(${col.r},${col.g},${col.b},${intensity * 0.2})`;
      c.shadowBlur = 5 * intensity;

      const gradA = c.createLinearGradient(x1, y1, ex1, ey1);
      gradA.addColorStop(0, `rgba(${col.r},${col.g},${col.b},${alpha})`);
      gradA.addColorStop(0.5, `rgba(${col.r},${col.g},${col.b},${alpha * 0.55})`);
      gradA.addColorStop(0.8, `rgba(${col.r},${col.g},${col.b},${alpha * 0.2})`);
      gradA.addColorStop(1, `rgba(${col.r},${col.g},${col.b},0)`);
      c.beginPath(); c.moveTo(x1, y1); c.lineTo(ex1, ey1);
      c.strokeStyle = gradA; c.lineWidth = lw; c.stroke();

      const gradB = c.createLinearGradient(x2, y2, ex2, ey2);
      gradB.addColorStop(0, `rgba(${col.r},${col.g},${col.b},${alpha * 0.85})`);
      gradB.addColorStop(0.5, `rgba(${col.r},${col.g},${col.b},${alpha * 0.45})`);
      gradB.addColorStop(0.8, `rgba(${col.r},${col.g},${col.b},${alpha * 0.15})`);
      gradB.addColorStop(1, `rgba(${col.r},${col.g},${col.b},0)`);
      c.beginPath(); c.moveTo(x2, y2); c.lineTo(ex2, ey2);
      c.strokeStyle = gradB; c.lineWidth = lw * 0.85; c.stroke();
      c.restore();
    }

    function npos(n: { x: number; y: number }, ox: number, oy: number, bw: number, bh: number) {
      return { x: ox + n.x * bw, y: oy + n.y * bh };
    }

    const brainDispH = H * 0.88;
    const brainDispW = brainDispH;
    const brainY = (H - brainDispH) / 2 - H * 0.02;
    const leftX = (halfW - brainDispW) / 2;
    const rightX = halfW + (halfW - brainDispW) / 2;

    let t0: number | null = null;
    let animId: number;

    function frame(ts: number) {
      if (!t0) t0 = ts;
      const t = (ts - t0) / 1000;
      ctx.clearRect(0, 0, W, H);
      if (!imgReady) { animId = requestAnimationFrame(frame); return; }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      ctx.save(); ctx.filter = "opacity(42%)";
      ctx.drawImage(brainImg, leftX, brainY, brainDispW, brainDispH);
      ctx.restore();
      ctx.save(); ctx.filter = "grayscale(65%) opacity(32%)";
      ctx.drawImage(brainImg, rightX, brainY, brainDispW, brainDispH);
      ctx.restore();

      const sI: Record<string, number> = {};
      for (const [k, v] of Object.entries(NETS)) sI[k] = pulse(t, v.freq, 0);

      // Coordinated (left)
      ctx.save();
      brainClipPath(ctx, leftX, brainY, brainDispW, brainDispH);
      ctx.clip();
      for (const [i, j] of CROSS_CONN) {
        if (i >= NODES.length || j >= NODES.length) continue;
        const a = npos(NODES[i], leftX, brainY, brainDispW, brainDispH);
        const b = npos(NODES[j], leftX, brainY, brainDispW, brainDispH);
        drawConn(ctx, a.x, a.y, b.x, b.y, (sI[NODES[i].net] + sI[NODES[j].net]) / 2 * 0.4, { r: 140, g: 100, b: 80 }, 0.8);
      }
      for (const [i, j, d] of withinConn) {
        const a = npos(NODES[i], leftX, brainY, brainDispW, brainDispH);
        const b = npos(NODES[j], leftX, brainY, brainDispW, brainDispH);
        const net = NETS[NODES[i].net];
        drawConn(ctx, a.x, a.y, b.x, b.y, sI[NODES[i].net], net.base, Math.max(0.6, 1.5 - d * 1.5));
      }
      for (let i = 0; i < NODES.length; i++) {
        const p = npos(NODES[i], leftX, brainY, brainDispW, brainDispH);
        const net = NETS[NODES[i].net];
        drawNode(ctx, p.x, p.y, sI[NODES[i].net], net.base, net.glow, NODES[i].sz);
      }
      ctx.restore();

      // Dysregulated (right)
      ctx.save();
      brainClipPath(ctx, rightX, brainY, brainDispW, brainDispH);
      ctx.clip();
      let ci = 0;
      for (const [i, j] of withinConn) {
        const a = npos(NODES[i], rightX, brainY, brainDispW, brainDispH);
        const b = npos(NODES[j], rightX, brainY, brainDispW, brainDispH);
        const net = NETS[NODES[i].net];
        const av = (pulse(t, dysFreq[i], dysPhase[i]) * dysAmp[i] + pulse(t, dysFreq[j], dysPhase[j]) * dysAmp[j]) / 2;
        const reach = dysConnMaxReach[ci] * pulse(t, dysConnReachFreq[ci], dysConnReachPhase[ci]);
        drawConnReaching(ctx, a.x, a.y, b.x, b.y, reach, av, net.base);
        ci++;
      }
      for (const [i, j] of CROSS_CONN) {
        if (i >= NODES.length || j >= NODES.length) { ci++; continue; }
        const a = npos(NODES[i], rightX, brainY, brainDispW, brainDispH);
        const b = npos(NODES[j], rightX, brainY, brainDispW, brainDispH);
        const av = (pulse(t, dysFreq[i], dysPhase[i]) * dysAmp[i] + pulse(t, dysFreq[j], dysPhase[j]) * dysAmp[j]) / 2;
        const reach = dysConnMaxReach[ci] * pulse(t, dysConnReachFreq[ci], dysConnReachPhase[ci]);
        drawConnReaching(ctx, a.x, a.y, b.x, b.y, reach, av, { r: 120, g: 100, b: 90 });
        ci++;
      }
      for (let i = 0; i < NODES.length; i++) {
        const p = npos(NODES[i], rightX, brainY, brainDispW, brainDispH);
        const net = NETS[NODES[i].net];
        const intens = pulse(t, dysFreq[i], dysPhase[i]) * dysAmp[i];
        drawNode(ctx, p.x, p.y, intens, net.base, net.glow, NODES[i].sz);
      }
      ctx.restore();

      animId = requestAnimationFrame(frame);
    }

    animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="w-full">
      <canvas
        ref={canvasRef}
        className="w-full"
        style={{ aspectRatio: "1200 / 560" }}
      />
      <div className="flex mt-4">
        <div className="flex-1 text-center">
          <div className="w-7 h-[1.5px] bg-[var(--color-forest)]/50 mx-auto mb-2" />
          <p className="text-sm uppercase tracking-[0.14em] text-[var(--foreground)]/70 font-light">
            {leftLabel}
          </p>
        </div>
        <div className="flex-1 text-center">
          <div className="w-7 h-[1.5px] bg-[var(--color-forest)]/50 mx-auto mb-2" />
          <p className="text-sm uppercase tracking-[0.14em] text-[var(--foreground)]/70 font-light">
            {rightLabel}
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-6 mt-4 opacity-55 text-[11px] tracking-wide">
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: "rgba(40,150,40,0.8)" }} />Frontoparietal</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: "rgba(40,136,170,0.8)" }} />Dorsal attention</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: "rgba(139,58,98,0.8)" }} />Salience</span>
      </div>
    </div>
  );
}
