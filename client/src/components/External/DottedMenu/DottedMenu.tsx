import * as React from "react";

interface IState {
    isVisible: boolean
}

class DottedMenu extends React.Component<{}, IState> {
    state = {
        isVisible: false
    };

    onHideMenu = () => {
        this.setState({isVisible: false});
        document.addEventListener('mousedown', this.onHideMenu);
    }

    onShowMenu = (e: any) => {
        e.preventDefault();

        this.setState({isVisible: true});
    }

    render() {
        return (
            <div className={"dottedMenu"}>
                <div
                    className={this.state.isVisible === false ? "dottedMenu__more" : "dottedMenu__more dottedMenu__show-more-menu"}>
                    <button onClick={this.onShowMenu} className={"dottedMenu__more-btn"}>
                        <span className={"dottedMenu__dot"}/>
                        <span className={"dottedMenu__dot"}/>
                        <span className={"dottedMenu__dot"}/>
                    </button>
                    <div className={"dottedMenu__more-menu"}>
                        <div className={"dottedMenu__more-menu-caret"}>
                            <div className={"dottedMenu__more-menu-caret-outer"}/>
                            <div className={"dottedMenu__more-menu-caret-inner"}/>
                        </div>
                        <ul className={"dottedMenu__more-menu-items"} role="menu" aria-labelledby="more-btn"
                            aria-hidden="true" onClick={this.onHideMenu}>
                            {this.props.children}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DottedMenu;