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
import QuoteConfirmationModal from './components/QuoteConfirmationModal';
import FloatingWhatsapp from './components/FloatingWhatsapp';

export default function App() {
  const [specModalOpen, setSpecModalOpen] = useState(false);
  const [activeProductKey, setActiveProductKey] = useState('single-phase');

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [submittedFormData, setSubmittedFormData] = useState(null);
  const [emailStatus, setEmailStatus] = useState(null);

  const handleOpenSpecModal = (productKey) => {
    setActiveProductKey(productKey);
    setSpecModalOpen(true);
  };

  const handleFormSubmit = (formData, result) => {
    setSubmittedFormData(formData);
    setEmailStatus(result || { success: true });
    setQuoteModalOpen(true);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <HeroSection onSubmitForm={handleFormSubmit} />
        <TrustBadgesStrip />
        <WhyChooseUs />
        <SolutionsSection onOpenSpecModal={handleOpenSpecModal} />
        <TrustedBrands />
        <BatterySection />
        <IndustryGrid />
        <KvaCalculator />
        <ContactSection onSubmitForm={handleFormSubmit} />
      </Box>
      <Footer />

      {/* Dynamic Modals */}
      <ProductSpecModal
        open={specModalOpen}
        productKey={activeProductKey}
        onClose={() => setSpecModalOpen(false)}
      />

      <QuoteConfirmationModal
        open={quoteModalOpen}
        data={submittedFormData}
        emailStatus={emailStatus}
        onClose={() => setQuoteModalOpen(false)}
      />

      {/* Floating Action Button */}
      <FloatingWhatsapp />
    </Box>
  );
}
