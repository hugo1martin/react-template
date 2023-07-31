import React, { useEffect } from 'react';
import chroma from 'chroma-js';
import Footer from './footer';
import Navbar from './navbar';

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  useEffect(() => {
    // Function to generate random RGB values
    function generateTriadicColors() {
      // Generate a random hue for the primary color
      const hue = Math.random() * 360;

      // Define lightness value for the primary color
      const lightnessPrimary = Math.random() * 0.4 + 0.3; // Adjust for desired brightness

      // Create the primary color
      const primaryColor = chroma.hsl(hue, 0.6, lightnessPrimary).hex();

      // Calculate the hues for the other two colors, spaced 120 degrees apart
      const hue1 = (hue + 120) % 360;
      const hue2 = (hue + 240) % 360;

      // Define lightness values for the other two colors (slightly lighter and darker than the primary color)
      const lightnessSecondary = lightnessPrimary + 0.1;
      const lightnessTertiary = lightnessPrimary - 0.1;

      // Create the other two colors
      const secondaryColor = chroma.hsl(hue1, 0.7, lightnessSecondary).hex();
      const tertiaryColor = chroma.hsl(hue2, 0.7, lightnessTertiary).hex();

      return [primaryColor, secondaryColor, tertiaryColor];
    }

    function getDarkTextColor(primaryColor: any) {
      const MIN_CONTRAST_RATIO = 4.5; // Minimum recommended contrast ratio for text

      let textColor = chroma.contrast('black', primaryColor) >= MIN_CONTRAST_RATIO ? 'black' : 'white';

      if (textColor === 'white') {
        // If white text doesn't have sufficient contrast, adjust the lightness of the primary color
        let lightness = chroma(primaryColor).hsl()[2];

        while (chroma.contrast('white', chroma.hsl(0, 0, lightness).hex()) < MIN_CONTRAST_RATIO) {
          lightness += 0.01; // Increase lightness slightly until contrast is sufficient
        }

        textColor = chroma.hsl(0, 0, lightness).hex();
      }

      return textColor;
    }


    let generatedTriadicColors = generateTriadicColors();
    let generatedTextColor = getDarkTextColor(generatedTriadicColors[0]);
    // Update the CSS variables with random colors
    const root = document.documentElement;
    root?.style.setProperty("--primary", generatedTriadicColors[0]);
    root?.style.setProperty("--secondary", generatedTriadicColors[1]);
    root?.style.setProperty("--tertiary", generatedTriadicColors[2]);
    root?.style.setProperty("--text-color", generatedTextColor);
  }, []);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
