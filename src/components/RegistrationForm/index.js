import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    first: '',
    last: '',
    ef: false,
    el: false,
    anotherresponse: false,
  }

  onChangeFirstName = event => {
    this.setState({
      first: event.target.value,
    })
  }

  onChangeLastName = event => {
    this.setState({
      last: event.target.value,
    })
  }

  onSubmitForm = event => {
    event.preventDefault()
  }

  onblurFirst = () => {
    const {first} = this.state
    if (first === '') {
      this.setState({
        ef: true,
      })
    } else {
      this.setState({
        ef: false,
      })
    }
  }

  onblurLast = () => {
    const {last} = this.state
    if (last === '') {
      this.setState({el: true})
    } else {
      this.setState({el: false})
    }
  }

  newForm = () => {
    this.setState({
      first: '',
      last: '',
      ef: false,
      el: false,
      anotherresponse: false,
    })
  }

  onRenderForm = () => {
    const {el, ef} = this.state
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <label htmlFor="first">FIRST NAME</label>
          <input
            id="first"
            type="text "
            placeholder="First name"
            onChange={this.onChangeFirstName}
            onBlur={this.onblurFirst}
          />
          <label htmlFor="last">LAST NAME</label>
          {ef ? <p>Required</p> : ''}

          <input
            type="text "
            id="last"
            placeholder="Last name"
            onChange={this.onChangeLastName}
            onBlur={this.onblurLast}
          />
          {el ? <p>Required</p> : ''}

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  renderStatus = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button onClick={this.newForm} type="button">
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {anotherresponse} = this.state
    return anotherresponse ? this.onRenderForm : this.renderStatus
  }
}

export default RegistrationForm
