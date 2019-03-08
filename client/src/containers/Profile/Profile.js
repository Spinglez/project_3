import React, { Component, Fragment } from 'react'
import call from '../../utils/call'
import { Header, RingLoader} from '../../components/index'


export class Profile extends Component {

  state = {
    user: null,
    dBdata : {},
    friendEmail: '',
    update: false,
    submitStatus: false
  }

  componentDidMount() {
    // this call needs to be updated to local storage email pull. when ready
    call.get('test@gmail.com')
      .then((res) => {
        this.setState({dBdata: res.data})
        console.log('this content is set');
      }).then(()=>{
        this.setState({update : true})
        console.log('this has set state as update to true');
      }).catch(err => {
        if (err) console.log(err);
      })
  }

  componentWillUnmount() {
    this.setState({update: false})
  }

  handleInputChange = event => {
    let value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
      let email1 = this.state.dBdata.data.email
      let email2 = this.state.friendEmail
      const postBody = {
        email1: email1,
        email2: email2
      };

      console.log(postBody);

      call.post(postBody)
        .then(res =>{
          console.log(res);
      }).catch(err => {
        if (err) console.error(err);
      });

      this.setState({
        friendEmail: '',
        submitStatus: true
      });
  }

  render() {
    return (
      <div>
        <Header />
          {this.state.update === true &&
            <Fragment>
              <h1>Hi there {this.state.dBdata.data.firstName}!</h1>
              <div>
                <p>it's nice to see you today</p>
                <p>This is your profile page, consider it your MovieKnight Hub</p>
              </div>
              <div>
                <h2>Looking to watch a movie with someone? Get your best matches below:</h2>
                <form>
                  <label>
                    Friends Email:
                      <input value={this.state.friendEmail} type="text" name="friendEmail" onChange={this.handleInputChange}/>
                  </label>
                  <input type="submit" value="Submit" onClick={this.handleFormSubmit}/>
                </form>
              </div>
              {this.state.submitStatus === true &&
                <Fragment>
                  <p>We're looking for your matches, please wait!</p>
                  <RingLoader />
                </Fragment>
              }
            </Fragment>
          }
          {this.state.update === false &&
            <Fragment>
              <h1>Please wait while we load your profile page, thanks for your patience!</h1>
              {/*ringloader will render below when update is set to false.*/}
              <RingLoader />
            </Fragment>
          }
      </div>
    )
  }
}

export default Profile
