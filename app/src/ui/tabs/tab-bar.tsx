import * as React from 'react'
import { Repository } from '../../models/repository'
import { CloningRepository } from '../../models/cloning-repository'
import { Tab } from './tab'
import { Octicon } from '../octicons'
import * as OcticonSymbol from '../octicons/octicons.generated'

export interface IRepositoryTab {
  /** Unique identifier for the tab */
  readonly id: string

  /** The repository displayed in this tab */
  readonly repository: Repository | CloningRepository
}

interface ITabBarProps {
  /** The array of open tabs */
  readonly tabs: ReadonlyArray<IRepositoryTab>

  /** The index of the currently active tab */
  readonly activeTabIndex: number

  /** Called when a tab is selected */
  readonly onTabSelected: (index: number) => void

  /** Called when a tab's close button is clicked */
  readonly onTabClosed: (index: number) => void

  /** Called when the new tab button is clicked */
  readonly onNewTabClick: () => void
}

/** The tab bar component that displays all open repository tabs */
export class TabBar extends React.Component<ITabBarProps> {
  private onSelectTab = (index: number) => {
    return () => {
      this.props.onTabSelected(index)
    }
  }

  private onCloseTab = (index: number) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      this.props.onTabClosed(index)
    }
  }

  private onNewTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    this.props.onNewTabClick()
  }

  public render() {
    const { tabs, activeTabIndex } = this.props

    if (tabs.length === 0) {
      return null
    }

    return (
      <div className="tab-bar">
        <div className="tab-container">
          {tabs.map((tab, index) => (
            <Tab
              key={tab.id}
              repository={tab.repository}
              isActive={index === activeTabIndex}
              onSelect={this.onSelectTab(index)}
              onClose={this.onCloseTab(index)}
              canClose={tabs.length > 1}
            />
          ))}
        </div>
        <button
          className="new-tab-button"
          onClick={this.onNewTabClick}
          aria-label="Open new tab"
          title="Open new tab"
        >
          <Octicon symbol={OcticonSymbol.plus} />
        </button>
      </div>
    )
  }
}
