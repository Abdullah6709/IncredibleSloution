import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustBadgesStrip from './components/TrustBadgesStrip';
import WhyChooseUs from './components/WhyChooseUs';
import SolutionsSection from './components/SolutionsSection';
import TrustedBrands from './components/TrustedBrands';
import BatterySection from './components/BatterySection';
import IndustryGrid from './components/IndustryGrid';
import KvaCalculator from './components/KvaCalculator';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProductSpecModal from './components/ProductSpecModal';
import FloatingWhatsapp from './components/FloatingWhatsapp';

export default function App() {
  const [specModalOpen, setSpecModalOpen] = useState(false);
  const [activeProductKey, setActiveProductKey] = useState('single-phase');

  const handleOpenSpecModal = (productKey) => {
    setActiveProductKey(productKey);
    setSpecModalOpen(true);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <HeroSection />
        <TrustBadgesStrip />
        <WhyChooseUs />
        <SolutionsSection onOpenSpecModal={handleOpenSpecModal} />
        <TrustedBrands />
        <BatterySection />
        <IndustryGrid />
        <KvaCalculator />
        <ContactSection />
      </Box>
      <Footer />

      {/* Product Spec Modal */}
      <ProductSpecModal
        open={specModalOpen}
        productKey={activeProductKey}
        onClose={() => setSpecModalOpen(false)}
      />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsapp />
    </Box>
  );
}
