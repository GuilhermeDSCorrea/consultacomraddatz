import React, { useState, useEffect } from 'react';
import { TopUrgencyBanner } from './components/TopUrgencyBanner';
import { HeroSection } from './components/HeroSection';
import { SocialProofPopups } from './components/SocialProofPopups';
import { DeliverablesSection } from './components/DeliverablesSection';
import { AuthoritySection } from './components/AuthoritySection';
import { CheckoutModal } from './components/CheckoutModal';
import { ExitIntentModal } from './components/ExitIntentModal';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export default function App() {
  const [timeLeft, setTimeLeft] = useState<number>(599); // 09:59 initial timer
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState<boolean>(false);

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Exit intent detection (mouse leaving top of browser window)
  useEffect(() => {
    let triggered = false;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered && !isCheckoutOpen) {
        triggered = true;
        setIsExitModalOpen(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isCheckoutOpen]);

  const handleOpenCheckout = () => {
    const kiwifyTrigger = document.getElementById('kiwify-upsell-trigger-BqUPN6V');
    if (kiwifyTrigger) {
      kiwifyTrigger.click();
    }
    setIsCheckoutOpen(true);
  };

  const handleDeclineClick = () => {
    const kiwifyCancel = document.getElementById('kiwify-upsell-cancel-trigger-BqUPN6V');
    if (kiwifyCancel) {
      kiwifyCancel.click();
    } else {
      setIsExitModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#060d1d] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* 1. Top Urgency & Countdown Bar */}
      <TopUrgencyBanner
        timeLeftSeconds={timeLeft}
        onOpenCheckout={handleOpenCheckout}
      />

      {/* 2. Hero Section - Contains the Main Offer & Single Kiwify Upsell Button */}
      <HeroSection
        onOpenCheckout={handleOpenCheckout}
        onDeclineClick={handleDeclineClick}
      />

      {/* 3. Deliverables */}
      <DeliverablesSection onOpenCheckout={handleOpenCheckout} />

      {/* 4. Nutritionist Authority */}
      <AuthoritySection onOpenCheckout={handleOpenCheckout} />

      {/* 5. FAQ Accordion */}
      <FAQSection />

      {/* 6. Footer */}
      <Footer />

      {/* 7. Social Proof Floating Notifications */}
      <SocialProofPopups />

      {/* 8. Checkout / Scheduling Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* 9. Exit Intent Alert Modal */}
      <ExitIntentModal
        isOpen={isExitModalOpen}
        onClose={() => setIsExitModalOpen(false)}
        onOpenCheckout={handleOpenCheckout}
        timeLeftSeconds={timeLeft}
      />

    </div>
  );
}
