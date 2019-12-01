import * as React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Notification from '../External/Notification/Notification';

interface IProps {
  to: string;
  activeOnlyWhenExact?: boolean;
}

export const SideMenuLink = ({ to, activeOnlyWhenExact }: IProps) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }: any, index: number) => (
        <li
          key={index}
          className={
            match
              ? 'side-navigation__item side-navigation__item--active'
              : 'side-navigation__item'
          }>
          <NavLink to={to} className={'side-navigation__link'} />
        </li>
      )}
    />
  );
};

interface IState {
  isUnderBreakpoint: boolean;
}

class Navigation extends React.Component<{}, IState> {
  state = {
    isUnderBreakpoint: false,
  };

  onCheckResolution = () => {
    this.setState({ isUnderBreakpoint: window.innerWidth < 480 });
  };

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.onCheckResolution();
    });

    this.onCheckResolution();
  }

  render(): JSX.Element {
    return (
      <React.Fragment>
        {this.state.isUnderBreakpoint && (
          <Notification
            type={'danger'}
            text={
              'Your device resolution is under supported value. Some content may not appear correctly'
            }
          />
        )}
        <nav className={'side-navigation'}>
          <ul className={'side-navigation__container'}>
            <SideMenuLink activeOnlyWhenExact={true} to="/" />
            <SideMenuLink to="/buy" />
            <SideMenuLink to="/reservation" />
            <SideMenuLink to="/add" />
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navigation;
