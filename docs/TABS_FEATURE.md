# Multi-Repository Tabs Feature

## Overview

The multi-repository tabs feature allows users to work with multiple repositories simultaneously in GitHub Desktop, similar to browser tabs. This feature significantly improves productivity for developers who work across multiple projects.

## Features

### Core Functionality

- **Multiple Repository Tabs**: Open and switch between multiple repositories in a single window
- **Visual Tab Bar**: Clean, AMOLED-themed tab bar showing all open repositories
- **Smart Tab Management**: Automatic tab creation and intelligent repository switching
- **Persistent State**: Tabs remain open as you work, maintaining your multi-repo workflow

### Tab Operations

- **Open Repository**: Selecting a repository creates or switches to its tab
- **Switch Tabs**: Click on a tab to switch to that repository
- **Close Tabs**: Click the close button (×) to close a tab
- **Minimum One Tab**: At least one tab is always kept open

## User Interface

### Tab Appearance

Each tab displays:
- **Repository Icon**: 
  - GitHub repository icon (varies by repository type)
  - Local repository icon (folder icon)
  - Clone in progress icon (download icon)
- **Repository Name**: Truncated with ellipsis if too long
- **Close Button**: Appears on hover (always visible on touch devices)

### Visual States

- **Active Tab**: 
  - Highlighted with AMOLED theme colors
  - Bottom border in accent blue
  - White/bright text
  - Lighter background

- **Inactive Tabs**:
  - Dimmer background
  - Secondary text color
  - Subtle hover effect

- **Hover State**:
  - Background lightens slightly
  - Close button becomes visible
  - Smooth transition effect

## Technical Architecture

### State Management

#### IRepositoryTab Interface

```typescript
interface IRepositoryTab {
  readonly id: string          // Unique identifier
  readonly repository: Repository | CloningRepository
}
```

#### App State Extensions

```typescript
interface IAppState {
  // ...existing fields...
  readonly openTabs: ReadonlyArray<IRepositoryTab>
  readonly activeTabIndex: number
}
```

### Components

#### Tab Component (`app/src/ui/tabs/tab.tsx`)

Individual tab component responsible for:
- Rendering repository icon and name
- Handling click events for selection
- Rendering close button
- Managing visual states (active, hover)

**Props:**
- `repository`: The repository to display
- `isActive`: Whether this tab is currently selected
- `onSelect`: Callback when tab is clicked
- `onClose`: Callback when close button is clicked
- `canClose`: Whether the close button should be shown

#### TabBar Component (`app/src/ui/tabs/tab-bar.tsx`)

Container component that:
- Renders all open tabs
- Manages tab selection
- Handles tab closing
- Provides horizontal scrolling for many tabs

**Props:**
- `tabs`: Array of open tabs
- `activeTabIndex`: Index of the currently active tab
- `onTabSelected`: Callback when a tab is selected
- `onTabClosed`: Callback when a tab is closed

### State Management

#### AppStore Methods

**`_openRepositoryInNewTab(repository)`**
- Creates a new tab for the repository
- Generates unique tab ID
- Adds tab to the end of the array
- Activates the new tab
- Calls `_selectRepository` to load the repository

**`_switchToTab(index)`**
- Validates index is in bounds
- Updates `activeTabIndex`
- Calls `_selectRepository` for the tab's repository
- Emits state update

**`_closeTab(index)`**
- Validates index is in bounds
- Prevents closing last tab
- Removes tab from array
- Adjusts active tab index if needed
- Selects new active tab's repository
- Emits state update

**`_selectRepository(repository)` (Modified)**
- Creates first tab if no tabs exist
- Updates existing tab if repository changed
- Switches to existing tab if repository already open
- Maintains tab state consistency

#### Dispatcher Methods

```typescript
public openRepositoryInNewTab(repository): Promise<void>
public switchToTab(index): Promise<void>
public closeTab(index): Promise<void>
```

These methods delegate to the corresponding AppStore methods.

## Usage Patterns

### Opening a Repository

When a user selects a repository from the repository list:
1. If no tabs exist, create the first tab
2. If repository is already in a tab, switch to that tab
3. If repository is new, update the current tab to show it

### Working with Multiple Repositories

1. User opens first repository → First tab created automatically
2. User selects another repository → Tab switches to new repository
3. User wants to keep both open → Feature can be extended to add "Open in New Tab" option
4. User switches between tabs → Active tab changes, repository view updates

### Closing Tabs

1. User clicks close button (×) on a tab
2. If it's the only tab, close is prevented
3. If it's the active tab, switch to previous tab
4. Tab is removed from the array

## Styling

### AMOLED Theme Integration

The tabs are fully integrated with the AMOLED theme:

- **Background Colors**: Use theme's layered background colors
  - Inactive: `--toolbar-background-color` (#0d1117)
  - Active: `--background-color` (#010409)
  - Hover: `--toolbar-button-hover-background-color` (#1c2128)

- **Text Colors**:
  - Inactive: `--text-secondary-color`
  - Active: `--text-color`
  - Hover: Brighter text

- **Accent Colors**:
  - Active indicator: `--tab-bar-active-color` (blue)
  - Icons: Theme-appropriate colors

- **Borders**: 
  - Right border: `--box-border-color`
  - Active indicator: 2px solid accent color

### Responsive Design

- Tabs have min-width (120px) and max-width (240px)
- Horizontal scrolling enabled when tabs exceed viewport width
- Scrollbar hidden but functionality retained
- Fade effect at edges to indicate more content

## Future Enhancements

### Planned Features

- [ ] **Keyboard Shortcuts**:
  - `Cmd/Ctrl + T`: Open new tab
  - `Cmd/Ctrl + W`: Close current tab
  - `Cmd/Ctrl + 1-9`: Switch to tab by number
  - `Cmd/Ctrl + Tab`: Cycle through tabs

- [ ] **Context Menu**:
  - Right-click on tab for options
  - Close tab
  - Close other tabs
  - Close tabs to the right
  - Close all tabs except this one

- [ ] **Drag and Drop**:
  - Reorder tabs by dragging
  - Visual feedback during drag
  - Drop indicator between tabs

- [ ] **Tab Persistence**:
  - Save open tabs on app close
  - Restore tabs on app launch
  - Persist tab order

- [ ] **Tab Tooltips**:
  - Show full repository path on hover
  - Display repository status (ahead/behind)
  - Show last commit info

### Possible Extensions

- **Tab Groups**: Group related repositories
- **Tab Colors**: Color-code tabs by project or organization
- **Split View**: View two repositories side-by-side
- **Tab Search**: Quick search/filter for tabs when many are open
- **Tab Pinning**: Pin frequently used repositories

## Development Guide

### Adding New Tab Features

1. **State Changes**: Extend `IRepositoryTab` or `IAppState` as needed
2. **Store Methods**: Add new methods to `AppStore` class
3. **Dispatcher**: Add corresponding dispatcher methods
4. **UI Updates**: Update `Tab` or `TabBar` components
5. **Styling**: Add styles to `app/styles/ui/_tabs.scss`

### Testing Considerations

When testing tab functionality:
- Test with 0, 1, 2, and many tabs
- Test switching between tabs
- Test closing different tabs (first, middle, last, active)
- Test with different repository types (normal, cloning, missing)
- Test keyboard navigation
- Test with different screen sizes
- Test theme changes with tabs open

### Performance Considerations

- Tab IDs are generated using timestamp + random string
- Tab array is immutable (creates new array on changes)
- `emitUpdate()` is called after tab operations
- Repository selection triggers normal repository loading

## Accessibility

- Tab bar is keyboard navigable
- Close buttons have `aria-label` attributes
- Active tab state is clearly indicated visually
- Color choices meet WCAG AA contrast requirements
- Touch-friendly close buttons on mobile devices

## Browser/Platform Support

Works across all GitHub Desktop supported platforms:
- macOS (native)
- Windows (native)
- Linux (community builds)

## Troubleshooting

### Common Issues

**Tabs not appearing**:
- Check that a repository is selected
- Verify `openTabs` array is populated in state
- Check console for JavaScript errors

**Tab close button not working**:
- Ensure there's more than one tab open
- Check that click event isn't being prevented
- Verify `onTabClosed` callback is connected

**Tab styles not applied**:
- Verify `app/styles/ui/_tabs.scss` is imported
- Check that AMOLED theme variables are loaded
- Inspect elements to see applied styles

## Credits

This feature was inspired by:
- Modern web browsers (Chrome, Firefox, Safari)
- Visual Studio Code's tab system
- JetBrains IDEs multi-window management
- User feedback requesting multi-repository support
