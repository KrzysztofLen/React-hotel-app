import React, {Component} from "react";
import Dropzone from "react-dropzone";

class DropzoneElement extends Component {
	render() {
		const files = this.props.files.map(file => (
			<li key={file.name} className={"dropzone__file"}>
				{file.name} - {file.size} bytes
			</li>
		));

		return (
			<React.Fragment>
				<aside className={"dropzone__files-wrapper"}>
					<h4 className={"dropzone__files-title"}>Files</h4>
					<ul>{files}</ul>
				</aside>
				<Dropzone onDrop={this.props.onDrop} accept="image/*" name={"hotel_images"}>
					{({getRootProps, getInputProps, isDragActive, isDragReject}) => (
						<div
							className={"dropzone__container"} {...getRootProps()}>
							<input {...getInputProps()} />
							{isDragActive &&
							<div className={`dropzone__overlay ${isDragReject ? "dropzone__overlay--rejected" : ""}`}>
								{isDragReject ? "Unsupported file type..." : "Drop files here"}
							</div>}
							<p className={"dropzone__text"}>Drop files here, or click to select files</p>
						</div>
					)}
				</Dropzone>
			</React.Fragment>
		)
	}
}

export default DropzoneElement;