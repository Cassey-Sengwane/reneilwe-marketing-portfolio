"use client";

import { useState, useEffect } from "react";
import OpeningHero from "@/components/OpeningHero";
import BrandIntroduction from "@/components/BrandIntroduction";
import CampaignControlCentre from "@/components/CampaignControlCentre";
import DigitalMarketingExperience from "@/components/DigitalMarketingExperience";
import BrandActivationExperience from "@/components/BrandActivationExperience";
import CampaignPortfolio from "@/components/CampaignPortfolio";
import MarketingFunnelJourney from "@/components/MarketingFunnelJourney";
import EducationPathway from "@/components/EducationPathway";
import GautengInteractiveMap from "@/components/GautengInteractiveMap";
import VirtualAgencyExperience from "@/components/VirtualAgencyExperience";
import WhyReneilweSection from "@/components/WhyReneilweSection";
import FinalConversionSection from "@/components/FinalConversionSection";
import RecruiterModeModal from "@/components/RecruiterModeModal";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CustomCursor from "@/components/CustomCursor";
import { soundManager } from "@/lib/sound";

export default function Home() {
const [campaignLaunched, setCampaignLaunched] = useState(false);
const [recruiterModeOpen, setRecruiterModeOpen] = useState(false);
const [soundEnabled, setSoundEnabled] = useState(false);
const [themeDark, setThemeDark] = useState(true);

// Sync initial sound state
useEffect(() => {
soundManager.setMuted(!soundEnabled);
}, [soundEnabled]);

const handleLaunchCampaign = () => {
soundManager.playLaunchWhoosh();
setCampaignLaunched(true);
};

const toggleSound = () => {
const nextState = !soundEnabled;
setSoundEnabled(nextState);
soundManager.setMuted(!nextState);
if (nextState) {
soundManager.playClick();
}
};

const toggleTheme = () => {
soundManager.playClick();
setThemeDark(!themeDark);
if (typeof document !== "undefined") {
document.documentElement.classList.toggle("light-theme");
document.documentElement.classList.toggle("dark");
}
};

return (
<main className="min-h-screen bg-[#09090d] text-zinc-100 relative selection:bg-[#d4af37] selection:text-black">
{/* Precision Interactive Cursor */}
<CustomCursor />

{/* Opening Cinematic Cover */}
{!campaignLaunched ? (
<OpeningHero onLaunch={handleLaunchCampaign} />
) : (
<>
<SiteHeader
onOpenRecruiter={() => {
soundManager.playClick();
setRecruiterModeOpen(true);
}}
soundEnabled={soundEnabled}
onToggleSound={toggleSound}
isDark={themeDark}
onToggleTheme={toggleTheme}
/>

<div className="pt-20">
{/* 1. Brand Introduction */}
<BrandIntroduction />

{/* 2. Control Centre */}
<CampaignControlCentre />

{/* 3. Digital Experience: Flexisolution */}
<DigitalMarketingExperience />

{/* 4. Live Brand Activations: Eventwa */}
<BrandActivationExperience />

{/* 5. Campaign Portfolio */}
<CampaignPortfolio />

{/* 6. Funnel Journey */}
<MarketingFunnelJourney />

{/* 7. Education */}
<EducationPathway />

{/* 8. Interactive Gauteng Map */}
<GautengInteractiveMap />

{/* 9. Virtual Agency */}
<VirtualAgencyExperience />

{/* 10. Why Invest */}
<WhyReneilweSection
onOpenRecruiter={() => {
soundManager.playClick();
setRecruiterModeOpen(true);
}}
/>

{/* 11 & 12. Conversion and Contact */}
<FinalConversionSection />
</div>

<SiteFooter
onOpenRecruiter={() => {
soundManager.playClick();
setRecruiterModeOpen(true);
}}
/>

{/* Quick Recruiter Mode Drawer */}
<RecruiterModeModal
isOpen={recruiterModeOpen}
onClose={() => {
soundManager.playClick();
setRecruiterModeOpen(false);
}}
/>
</>
)}
</main>
);
}
