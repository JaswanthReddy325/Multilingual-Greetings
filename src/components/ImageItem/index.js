const ImageItem = props => {
  const {languageDetails, isActive} = props
  const {imageUrl, imageAltText} = languageDetails
  return (
    <div>
      {isActive ? (
        <img src={imageUrl} className="images" alt={imageAltText} />
      ) : null}
    </div>
  )
}
export default ImageItem
