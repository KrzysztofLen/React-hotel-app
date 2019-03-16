import * as React from "react";
import chevron from "../../../assets/SVG/chevron-small-down.svg";

interface IProps {
	label?: string,
	children: any
}

const Dropdown = (props: IProps) => {
	return (
		<ul className={"dropdown__menu"}>
			{props.label != null && <span>{props.label}</span>}
			<li className={"dropdown__menu-item"}>
				<input className={"dropdown__input"} id="check" type="checkbox" name="menu"/>
				<label className={"dropdown__label"} htmlFor="check">
					<img src={chevron} alt=""/>
				</label>
				<ul className={"dropdown__submenu"}>
					<li>
						<span className={"dropdown__submenu-item"}>{props.children}</span>
					</li>
				</ul>
			</li>
		</ul>
	)
};

export default Dropdown;