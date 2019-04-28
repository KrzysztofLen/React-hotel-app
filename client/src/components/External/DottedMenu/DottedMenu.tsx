import * as React from "react";

interface IState {
    isVisible: boolean
}

class DottedMenu extends React.Component<{}, IState> {
    state = {
        isVisible: false
    };

    onShowMenu = (e: any) => {
        e.preventDefault();

        this.setState((prevState: any) => {
            return {
                isVisible: !prevState.isVisible
            }
        });
    }

    render() {
        return (
            <div className={"dottedMenu"}>
                <div className={this.state.isVisible === false ? "more" : "more show-more-menu"}>
                    <button onClick={this.onShowMenu} className={"dottedMenu__more-btn"}>
                        <span className="more-dot"/>
                        <span className="more-dot"/>
                        <span className="more-dot"/>
                    </button>
                    <div className="more-menu">
                        <div className="more-menu-caret">
                            <div className="more-menu-caret-outer"/>
                            <div className="more-menu-caret-inner"/>
                        </div>
                        <ul className="more-menu-items" role="menu" aria-labelledby="more-btn"
                            aria-hidden="true">
                            {this.props.children}
                            {/*<li className="more-menu-item" role="presentation">*/}
                                {/*<button type="button" className={"dottedMenu__more-menu-btn"} role="menuitem">Delete*/}
                                {/*</button>*/}
                            {/*</li>*/}
                            {/*<li className="more-menu-item" role="presentation">*/}
                                {/*<button type="button" className={"dottedMenu__more-menu-btn"} role="menuitem">Update*/}
                                {/*</button>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DottedMenu;