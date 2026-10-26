"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Sparkles } from "lucide-react";

interface ImageFallbackProps extends Omit<ImageProps, "onError"> {
fallbackTitle?: string;
fallbackSubtitle?: string;
}

export default function ImageFallback({
src,
alt,
fallbackTitle = "Reneilwe Moagi",
fallbackSubtitle = "Marketing Graduate • University of Johannesburg",
className,
...rest
}: ImageFallbackProps) {
const [hasError, setHasError] = useState(false);

if (hasError) {
return (
<div className="w-full h-full min-h-[350px] bg-gradient-to-tr from-[#0b0b12] via-[#13131c] to-[#1c1829] flex flex-col items-center justify-center p-8 text-center border border-white/10 rounded-2xl relative overflow-hidden">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#d4af37] via-[#ec4899] to-[#6b21a8] p-[1.5px] mb-4">
<div className="w-full h-full bg-[#09090d] rounded-[14px] flex items-center justify-center">
<Sparkles className="w-7 h-7 text-[#d4af37]" />
</div>
</div>
<h4 className="text-xl font-display font-bold text-white mb-1">
{fallbackTitle}
</h4>
<p className="text-xs font-mono text-zinc-400 max-w-xs uppercase tracking-wider">
{fallbackSubtitle}
</p>
<span className="mt-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[#d4af37]">
Verified Editorial Asset
</span>
</div>
);
}

return (
<Image
src={src}
alt={alt}
className={className}
onError={() => setHasError(true)}
{...rest}
/>
);
}
