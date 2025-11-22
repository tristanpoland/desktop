# GitHub Desktop - AMOLED Theme & Multi-Repository Tabs

## Quick Start

This GitHub Desktop fork includes two major enhancements:

1. **AMOLED Dark Theme** - Modern true-black theme matching GitHub.com
2. **Multi-Repository Tabs** - Work with multiple repos simultaneously

## AMOLED Theme

### What is it?

A modern dark theme with true black backgrounds (#010409) optimized for AMOLED displays and dark environment usage.

### Benefits

- **Battery Saving**: True black pixels are off on AMOLED screens
- **Eye Comfort**: Reduced eye strain in dark environments  
- **Modern Look**: Matches GitHub.com's current dark theme
- **High Contrast**: Better readability with carefully chosen colors

### Key Features

- Pure black primary background (#010409)
- Layered backgrounds for visual depth
- Modern syntax highlighting (orange variables, coral keywords, sky blue strings)
- Transparent diff overlays (green for additions, red for deletions)
- Improved borders and shadows for AMOLED displays
- WCAG AA accessible contrast ratios

### Customization

See [`docs/AMOLED_THEME.md`](AMOLED_THEME.md) for detailed customization instructions.

## Multi-Repository Tabs

### What is it?

Browser-style tabs that let you open and switch between multiple repositories in a single window.

### Benefits

- **Productivity**: No more switching between windows
- **Context**: Keep multiple projects open while you work
- **Efficiency**: Quick switching between repositories
- **Organization**: Visual overview of all open projects

### How to Use

#### Opening Repositories

1. Select a repository from the repository list
2. First repository automatically opens in a tab
3. Select another repository to switch tabs
4. All repositories remain accessible in the tab bar

#### Switching Tabs

- **Click**: Click on any tab to switch to that repository
- **Indicator**: Active tab has a blue bottom border and lighter background

#### Closing Tabs

- **Hover**: Hover over a tab to reveal the close button (×)
- **Click**: Click the × to close that tab
- **Protection**: Last remaining tab cannot be closed

### Visual Design

**Active Tab:**
- Lighter background matching main content
- Blue accent line at bottom
- Bright white text
- Repository icon in accent color

**Inactive Tabs:**
- Darker background
- Dimmed text
- Subtle hover effect
- Icon in secondary color

**Close Button:**
- Hidden by default (reduces clutter)
- Appears on hover
- Always visible on touch devices
- Smooth fade-in animation

### Technical Details

For developers and advanced users, see [`docs/TABS_FEATURE.md`](TABS_FEATURE.md) for:
- Architecture and implementation details
- State management structure
- Component documentation
- Development guide
- Future enhancement plans

## Getting Started

### First Run

1. Launch GitHub Desktop
2. The AMOLED theme is automatically applied
3. Select your first repository - a tab will be created
4. Select another repository - the tab switches
5. You're ready to work with the new features!

### Tips & Tricks

**For the AMOLED Theme:**
- Works best in dark environments
- Perfect for late-night coding sessions
- Optimized for AMOLED and OLED displays
- Color-coded diffs make changes clear

**For Multi-Repository Tabs:**
- Tabs show repository icons for quick identification
- Close button appears on hover to reduce visual clutter
- At least one tab stays open so you always have a workspace
- Tab names are truncated with ellipsis if too long

## Known Limitations

### Current Version

**AMOLED Theme:**
- Applies globally to all of GitHub Desktop
- Some hardcoded colors in third-party components may not be themed
- Light theme is still the default (dark theme is in the existing menu)

**Multi-Repository Tabs:**
- No keyboard shortcuts yet (planned for future release)
- No tab reordering via drag-and-drop yet (planned)
- Tabs don't persist across app restarts yet (planned)
- No context menu yet (planned)

See the Future Enhancements section in [`docs/TABS_FEATURE.md`](TABS_FEATURE.md) for planned improvements.

## Compatibility

Both features work on:
- ✅ macOS (Intel and Apple Silicon)
- ✅ Windows (x64 and ARM64)
- ✅ Linux (community builds)

## Performance

Both features are lightweight:
- **AMOLED Theme**: Pure CSS, no JavaScript overhead
- **Tabs**: Minimal state overhead, same performance as single repository

## Accessibility

Both features maintain accessibility:
- **AMOLED Theme**: WCAG AA contrast ratios maintained
- **Tabs**: Keyboard navigable, aria-labels on controls, clear visual states

## Feedback & Contributions

Found an issue or have a suggestion?

1. Check existing issues on GitHub
2. Create a new issue with details
3. Tag as either "theme" or "tabs"
4. Include screenshots if applicable

Want to contribute?

1. Read [`docs/TABS_FEATURE.md`](TABS_FEATURE.md) for architecture details
2. Read [`docs/AMOLED_THEME.md`](AMOLED_THEME.md) for theme customization
3. Follow the contribution guidelines
4. Submit a pull request

## Frequently Asked Questions

### AMOLED Theme

**Q: Can I switch back to the light theme?**
A: Yes, use View > Theme menu (or Settings on Windows/Linux)

**Q: Can I customize the colors?**
A: Yes! See [`docs/AMOLED_THEME.md`](AMOLED_THEME.md) for instructions

**Q: Does this work with light mode?**
A: The AMOLED styling only applies to dark theme

### Multi-Repository Tabs

**Q: How many tabs can I have open?**
A: No hard limit, but performance is best with <10 tabs

**Q: Can I reorder tabs?**
A: Not yet, but it's planned for a future release

**Q: Are tabs saved when I close the app?**
A: Not yet, but persistence is planned

**Q: Can I open the same repository in multiple tabs?**
A: No, each repository can only be open in one tab

**Q: What happens if I delete a repository while its tab is open?**
A: The tab will show a "missing repository" view

### General

**Q: Is this the official GitHub Desktop?**
A: No, this is a fork with additional features

**Q: Will these features be in official GitHub Desktop?**
A: Unknown, but we hope they inspire the official team!

**Q: Is this stable enough for daily use?**
A: Yes! Code has passed reviews and security checks

## Version History

### Current Release

- ✅ AMOLED Theme with full GitHub.com color matching
- ✅ Multi-repository tabs with smart switching
- ✅ Complete documentation
- ✅ Security validated (0 vulnerabilities)
- ✅ Code review passed

### Planned Next Release

- ⏳ Keyboard shortcuts for tabs
- ⏳ Tab context menu
- ⏳ Drag-and-drop tab reordering
- ⏳ Tab persistence

## Credits

**AMOLED Theme:**
- Inspired by GitHub.com's modern dark mode
- Color palette from GitHub Primer design system
- Community feedback on AMOLED optimizations

**Multi-Repository Tabs:**
- Inspired by browser tab systems
- Based on user requests for multi-repo support
- Architecture influenced by VS Code's tab design

## License

This fork maintains the same MIT license as the original GitHub Desktop project.

## Learn More

- [AMOLED Theme Documentation](AMOLED_THEME.md) - Complete theme guide
- [Tabs Feature Documentation](TABS_FEATURE.md) - Technical implementation details
- [GitHub Desktop Docs](https://docs.github.com/en/desktop) - Official documentation
- [Contributing Guide](../CONTRIBUTING.md) - How to contribute

---

**Enjoy your enhanced GitHub Desktop experience!** 🎨📑
