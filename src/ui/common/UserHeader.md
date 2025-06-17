## Features

- Responsive design matching Figma specifications
- Accessible with proper ARIA labels
- Interactive close button with three states (normal, hovered, clicked)
- Settings button with hover effect
- Focus indicators for keyboard navigation
- Clean, modern styling with IBM Plex Sans Hebrew font
- Uses actual asset images from `src/assets/`

## Button States

### Settings Button
- Uses `setting.png` from assets
- Hover effect: opacity 0.7

### Close Button
- **Normal state**: `closeButton.png`
- **Hovered state**: `closeButtonHovered.png` 
- **Clicked state**: `closeButtonClicked.png`
- State management with Vue reactivity

## Styling

The component uses scoped CSS and follows the design system colors:
- Text color: `#666666`
- Icon color: `#374957` (for SVG icons)
- Font: IBM Plex Sans Hebrew, 10px, 500 weight
- Button states handled via image assets
