import React, { Component, Fragment } from 'react'
import call from '../../utils/call';
import { Footer, NavDrawer } from '../../components/index'
import { Modal } from 'antd';
import ProfileStyled from '../Profile/ProfileStyle';


export class Profile extends Component {

  state = {
    user: null,
    dbData: {},
    dbSavedMovies: {},
    friendEmail: '',
    submitStatus: false,
    matchedmovies: [],
    update: false,
    currentSection: 1,
    firstTime: true,
  }

  componentDidMount() {
    let user = localStorage.getItem('user_email')
    // this call needs to be updated to local storage email pull. when ready
    call.get(user)
      .then((res) => {
        this.setState({ dbData: res.data })
      }).then(() =>{
      // this call gets saved movies based on the user and populates the dbSavedMovies array
        this.refreshSavedMovies(this.state.dbData.data._id)
      }).then(() => {
        this.setState({ update: true })
      }).catch(err => {
        if (err) console.log(err);
      })
  }


  saveMovie = (title,overview,image,voteScore) => {
    let user =  this.state.dbData.data._id

      const postObj = {
        title:title,
        overview:overview,
        image:image,
        voteScore:voteScore,
        userId: user
      }

      call.postSave(postObj).then((res, err) =>{
        if (err) console.error(err);
        this.refreshSavedMovies(this.state.dbData.data._id)
      })
  }

  refreshSavedMovies = (user) => {
    call.getMovies(user)
      .then((res) => {
      this.setState({ dbSavedMovies: res.data })
      console.log('this content is set')
      })
  }

  removeMovie = (movieIndex) => {
    let reducedMovieSet = this.state.matchedmovies.data.filter(movie => movie.id !== movieIndex);
    console.log(reducedMovieSet)
    this.setState(
      {matchedmovies: {
        data: reducedMovieSet,
        success: true
      }
    })
  }

  handleInputChange = event => {
    let value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  handlePost = (data) =>{
    this.setState({ matchedmovies: data, submitStatus: false })
    console.log('state is set again here!');
  }

  clearModal = () =>{
    this.setState({firstTime: false})
  }

  clearSubmit = () => {
    this.setState({
      friendEmail: '',
      submitStatus: true
    });
  }


  info() {
    Modal.info({
      title: `Hi there ${this.state.dbData.data.firstName}!`,
      content: (
        <ProfileStyled>
          <div>
            <h2>Nice to see you today. Welcome to movieNite!</h2>
            <p>This is your profile page, consider it your movieNite Hub.</p>
          </div>
        </ProfileStyled>
      ),
      onOk() { },
    });
    this.clearModal();
  }

  mapResponses = (surveyObject, index) => {
    let question = surveyObject.question;
    let responseSet = []
    for(let i = 0; i < this.state.dbData.data.movieSurvey[index].length; i++){
      if(this.state.dbData.data.movieSurvey[index][i]){
        responseSet.push(` ${surveyObject.answerOptions[i]}`)
      }
    }
    return [question, responseSet]
  }
  
  render() {

    const { firstTime ,update, dbData, dbSavedMovies, matchedmovies, friendEmail, submitStatus} = this.state;

    return (
      <Fragment>
        {update &&
          <Fragment>
          {firstTime &&
            this.info()
          }
          </Fragment>
        }
        <Fragment>
          <NavDrawer
          dbData={dbData}
          dbSavedMovies={dbSavedMovies}
          matchedmovies={matchedmovies}
          friendEmail={friendEmail}
          submitStatus={submitStatus}
          update={update}
          saveMovie={this.saveMovie}
          refreshSavedMovies={this.refreshSavedMovies}
          removeMovie={this.removeMovie}
          handlePost={this.handlePost}
          handleInputChange={this.handleInputChange}
          clearSubmit={this.clearSubmit}
          mapResponses={this.mapResponses}
          >

          </NavDrawer>
        </Fragment>
        <Footer style={{position: 'fixed', marginBottom: 0}}/>
      </Fragment>

    )

  }
}

export default Profile
