import * as React from 'react'
import { Repository } from '../../models/repository'
import { CloningRepository } from '../../models/cloning-repository'
import { Octicon, iconForRepository } from '../octicons'
import * as OcticonSymbol from '../octicons/octicons.generated'

interface ITabProps {
  /** The repository represented by this tab */
  readonly repository: Repository | CloningRepository

  /** Whether this tab is currently active */
  readonly isActive: boolean

  /** Called when the tab is clicked */
  readonly onSelect: () => void

  /** Called when the close button is clicked */
  readonly onClose: (e: React.MouseEvent<HTMLButtonElement>) => void

  /** Whether this tab can be closed */
  readonly canClose: boolean
}

/** A single repository tab */
export class Tab extends React.Component<ITabProps> {
  private onTabClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Don't select if clicking the close button
    if ((e.target as HTMLElement).closest('.close-button')) {
      return
    }
    this.props.onSelect()
  }

  private onCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    this.props.onClose(e)
  }

  private getRepositoryName(): string {
    return this.props.repository.name
  }

  private getRepositoryIcon(): OcticonSymbol.OcticonSymbol {
    const { repository } = this.props

    if (repository instanceof Repository) {
      return iconForRepository(repository)
    } else {
      // Cloning repository
      return OcticonSymbol.desktopDownload
    }
  }

  public render() {
    const { isActive, canClose } = this.props
    const className = `tab ${isActive ? 'active' : ''}`

    return (
      <div className={className} onClick={this.onTabClick} title={this.getRepositoryName()}>
        <Octicon symbol={this.getRepositoryIcon()} className="tab-icon" />
        <span className="tab-label">{this.getRepositoryName()}</span>
        {canClose && (
          <button
            className="close-button"
            onClick={this.onCloseClick}
            aria-label="Close tab"
          >
            <Octicon symbol={OcticonSymbol.x} />
          </button>
        )}
      </div>
    )
  }
}
