// Write your code here
import './index.css'

const registrationStatus = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registration_closed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activity} = props

  const renderYetToRegister = () => (
    <div className="yetToReg-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-img"
      />
      <p className="register-para">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally love with the
        beautiful dance.
      </p>
      <button type="button" className="register-btn">
        Register here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div className="registered-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="right-tick-img"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationClosed = () => (
    <div className="closed-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-img"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p className="click-event">
        Stay tuned, We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderEventDetails = () => {
    switch (activity) {
      case registrationStatus.yetToRegister:
        return renderYetToRegister()
      case registrationStatus.registered:
        return renderRegistered()
      case registrationStatus.registration_closed:
        return renderRegistrationClosed()
      default:
        return (
          <p className="event-click">
            Click on an event, to view its registration details
          </p>
        )
    }
  }
  return <div className="right-cont">{renderEventDetails()}</div>
}

export default ActiveEventRegistrationDetails
