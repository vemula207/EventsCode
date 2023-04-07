// Write your code here
import './index.css'

const EventItem = props => {
  const {event, isActiveId, onEventClick} = props
  const {id, name, imageUrl, location} = event
  const eventImgCls = isActiveId ? 'event-img active' : 'event-img'

  const onImageClick = () => {
    onEventClick(id)
  }

  return (
    <li className="eventCard-cont">
      <button type="button" className="img-btn" onClick={onImageClick}>
        <img src={imageUrl} alt="event" className={eventImgCls} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
