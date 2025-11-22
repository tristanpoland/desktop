# AMOLED Theme Documentation

## Overview

This document describes the AMOLED theme implementation for GitHub Desktop, which provides a modern, high-contrast dark theme similar to GitHub.com's dark mode with true black backgrounds optimized for AMOLED displays.

## Color Palette

### Background Colors

The theme uses a layered approach to backgrounds for visual depth:

- **Primary Background** (`#010409`): The main canvas color, a near-black shade that matches GitHub.com's AMOLED theme
- **Secondary Background** (`#0d1117`): Used for elevated surfaces like toolbars and title bars
- **Tertiary Background** (`#161b22`): Used for cards, boxes, and other UI elements that need to stand out
- **Overlay Background** (`#1c2128`): Used for hover states and temporary overlays

### Border Colors

- **Primary Border** (`#30363d`): Standard border color with good contrast against backgrounds
- **Muted Border** (`#21262d`): Subtle borders for less prominent dividers

### Accent Colors

#### Diff Colors (RGB for transparency support)

- **Add/Success** (`46, 160, 67`): Green for additions and success states
- **Delete/Error** (`248, 81, 73`): Red for deletions and error states
- **Hover** (`88, 166, 255`): Blue for interactive hover states
- **Warning** (`187, 128, 9`): Yellow/orange for warnings

#### Syntax Highlighting

Modern GitHub color palette for code:

- **Variables**: `#ffa657` (Orange)
- **Keywords**: `#ff7b72` (Coral red)
- **Strings**: `#a5d6ff` (Sky blue)
- **Comments**: `#8b949e` (Gray)
- **Tags**: `#7ee787` (Green)
- **Attributes**: `#79c0ff` (Light blue)

## Implementation Details

### File Structure

The theme is implemented primarily in:

- `app/styles/themes/_dark.scss` - Main dark theme variables
- `app/styles/ui/window/_title-bar.scss` - Title bar colors for macOS/Windows
- `app/styles/ui/_welcome.scss` - Welcome screen background

### SCSS Variables

All colors are defined as SCSS variables at the top of `_dark.scss` for easy maintenance:

```scss
// Background colors
$amoled-bg-primary: #010409;
$amoled-bg-primary-rgb: 1, 4, 9;  // For transparency
$amoled-bg-secondary: #0d1117;
// ... etc

// Diff colors
$diff-add-rgb: 46, 160, 67;
$diff-delete-rgb: 248, 81, 73;
// ... etc

// Syntax colors
$syntax-variable: #ffa657;
$syntax-keyword: #ff7b72;
// ... etc
```

### Key CSS Variables

The theme sets these CSS custom properties on `body.theme-dark`:

#### Core Colors
- `--background-color`: Primary background
- `--text-color`: Primary text color
- `--text-secondary-color`: Secondary/muted text

#### UI Elements
- `--toolbar-background-color`: Toolbar background
- `--box-background-color`: Card/box background
- `--box-hover-background-color`: Hover state

#### Diff View
- `--diff-add-background-color`: Addition background (15% opacity)
- `--diff-add-inner-background-color`: Addition highlight (40% opacity)
- `--diff-delete-background-color`: Deletion background (15% opacity)
- `--diff-delete-inner-background-color`: Deletion highlight (40% opacity)

## Design Principles

### 1. True Black Backgrounds

Unlike traditional dark themes that use gray backgrounds, this theme uses near-black (`#010409`) as the primary background, which:
- Reduces eye strain in dark environments
- Saves battery on AMOLED displays
- Provides maximum contrast for text and UI elements

### 2. Layered Depth

Different elevation levels use progressively lighter backgrounds:
1. Canvas: `#010409`
2. Elevated (toolbars): `#0d1117`
3. Cards/Boxes: `#161b22`
4. Overlays: `#1c2128`

### 3. Transparent Overlays

Diff colors and status indicators use semi-transparent overlays instead of solid colors:
- Better visual integration with the black background
- Maintains consistency across different contexts
- Provides subtle but clear differentiation

### 4. High Contrast

All text and UI elements maintain WCAG AA contrast ratios against their backgrounds:
- Primary text (`#e6edf3`) on black: ~13:1 contrast
- Secondary text (`#9198a1`) on black: ~7:1 contrast
- Border colors are carefully chosen to be visible but not overwhelming

## Customization Guide

### Adjusting Background Darkness

To make the theme lighter or darker, modify the primary background variables:

```scss
$amoled-bg-primary: #010409;  // Make darker: #000000
$amoled-bg-secondary: #0d1117; // Adjust proportionally
```

### Changing Accent Colors

Diff and syntax highlighting colors can be customized by modifying the variables at the top of `_dark.scss`:

```scss
$diff-add-rgb: 46, 160, 67;  // Change green tone
$syntax-keyword: #ff7b72;     // Change keyword color
```

### Border Visibility

To make borders more or less visible:

```scss
$amoled-border: #30363d;       // Increase hex value for lighter
$amoled-border-muted: #21262d; // Adjust for subtle borders
```

## Browser/Platform Compatibility

The theme is designed to work across all platforms supported by GitHub Desktop:

- **macOS**: Custom gradient for title bar
- **Windows**: Solid color title bar with window controls
- **Linux**: Uses Windows styling

## Accessibility

The AMOLED theme maintains strong accessibility:

- ✅ WCAG AA compliant contrast ratios for all text
- ✅ Clear focus indicators with blue accent
- ✅ Distinct colors for different states (hover, active, selected)
- ✅ Semantic use of colors (green=add, red=delete, yellow=warning)

## Testing Recommendations

When modifying the theme, test:

1. **Diff View**: Ensure additions and deletions are clearly distinguishable
2. **Text Readability**: Check all text colors have sufficient contrast
3. **UI Elements**: Verify buttons, inputs, and controls are easily identifiable
4. **Dark Environment**: Test in a completely dark room to ensure no eye strain
5. **AMOLED Displays**: If possible, test on an AMOLED device to verify true blacks

## Future Improvements

Potential enhancements for the theme:

- [ ] Add light theme variant with similar design principles
- [ ] Support for high contrast mode
- [ ] User-customizable accent colors
- [ ] Automatic theme switching based on time of day
- [ ] Per-repository theme preferences

## Credits

This theme is inspired by:
- GitHub.com's modern dark theme
- Material Design's dark theme guidelines
- Community feedback on AMOLED-optimized interfaces
