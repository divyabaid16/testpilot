import React from 'react';
import classnames from 'classnames';

export default class Settings extends React.Component {

  constructor(props) {
    super(props);
  }

  wiki() {
    this.props.sendToGA('event', {
      eventCategory: 'Menu Interactions',
      eventAction: 'drop-down menu',
      eventLabel: 'wiki'
    });
    this.props.close();
  }

  fileIssue() {
    this.props.sendToGA('event', {
      eventCategory: 'Menu Interactions',
      eventAction: 'drop-down menu',
      eventLabel: 'file issue'
    });
    this.props.close();
  }

  discuss() {
    this.props.sendToGA('event', {
      eventCategory: 'Menu Interactions',
      eventAction: 'drop-down menu',
      eventLabel: 'Discuss'
    });
    this.props.close();
  }

  retire(evt) {
    evt.preventDefault();
    this.props.sendToGA('event', {
      eventCategory: 'Menu Interactions',
      eventAction: 'drop-down menu',
      eventLabel: 'Retire'
    });
    this.props.retire();
    this.props.close();
  }

  settingsClick() {
    return this.props.settingsClick();
  }

  showSettingsMenu() {
    return this.props.showSettingsMenu();
  }

  toggleSettings(evt) {
    let { sendToGA, toggleSettings } = this.props;
    sendToGA('event', {
      eventCategory: 'Menu Interactions',
      eventAction: 'drop-down menu',
      eventLabel: 'Toggle Menu'
    });
    toggleSettings(evt);
  }

  render() {
    return (
      <div id="settings">
         <div className="settings-contain">
            <div className={classnames(["button", "outline", "settings-button"], { active: this.showSettingsMenu()})}
                 onClick={e => this.toggleSettings(e)}
                 data-l10n-id="menuTitle">
              Settings
            </div>
              {
                this.showSettingsMenu()
                &&
                <div className="settings-menu" onClick={e => this.settingsClick(e)}>
                  <ul>
                    <li><a onClick={e => this.wiki(e)} data-l10n-id="menuWiki"
                       href="https://wiki.mozilla.org/Test_Pilot" target="_blank">Test Pilot Wiki</a></li>
                    <li><a onClick={() => this.discuss()} data-l10n-id="menuDiscuss"
                       href="https://discourse.mozilla-community.org/c/test-pilot" target="_blank">Discuss Test Pilot</a></li>
                    <li><a onClick={e => this.fileIssue(e)} data-l10n-id="menuFileIssue"
                       href="https://github.com/mozilla/testpilot/issues/new" target="_blank">File an Issue</a></li>
                    <li><hr /></li>
                    <li><a onClick={e => this.retire(e)} data-l10n-id="menuRetire">Uninstall Test Pilot</a></li>
                  </ul>
                </div>
              }
         </div>
       </div>
    );
  }
}

Settings.propTypes = {
  hasAddon: React.PropTypes.bool,
  sendToGA: React.PropTypes.func,
  close: React.PropTypes.func,
  retire: React.PropTypes.func,
  toggleSettings: React.PropTypes.func,
  settingsClick: React.PropTypes.func,
  showSettingsMenu: React.PropTypes.func,
  showSettings: React.PropTypes.func
}
