import React, { Component } from "react";
import NavContainer from "../../containers/NavContainer";
import { NavLink } from "react-router-dom";
import defaultpicture from "../../assets/images/default.jpg";

import {
  Segment,
  Grid,
  Image,
  Container,
  Statistic,
  Dimmer,
  Loader,
  Table,
  Divider
} from "semantic-ui-react";
const moment = require("moment");

class Profile extends Component {
  constructor() {
    super();
    this.isFetching = true;
  }

  componentWillMount() {
    if (!this.props._token) {
      this.props.history.push("/login");
    }
  }

  render() {
    console.log("PROFILE PAGE props => ", this.props);

    if (this.props.MyAnalysesPage.isFetching) {
      return (
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      );
    } else {
      let { MyAnalysesPage } = this.props;

      return (
        // NAV BAR
        <div className="ui  vertical masthead center aligned segment">
          <div className="following bar">
            <div className="ui container">
              <NavContainer />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Container>
            <Grid>
              <Grid.Column width={1} />

              {/* USER PICTURE AND DEMOGRAPHICS */}
              <Grid.Column width={14}>
                <Segment>
                  <Image src={defaultpicture} centered circular size="small" />
                  <h2>
                    {`${MyAnalysesPage.user.profile.fname} ${
                      MyAnalysesPage.user.profile.lname
                    }`}
                  </h2>
                  <Divider />
                  <h3> {MyAnalysesPage.user.profile.title}</h3>
                  <p>{MyAnalysesPage.user.profile.background}</p>
                </Segment>

                {/* USER STATISTICS */}
                <Segment>
                  {" "}
                  <Statistic.Group widths="four">
                    <Statistic>
                      <Statistic.Value>
                        {`${MyAnalysesPage.user.collections.length}`}
                      </Statistic.Value>
                      <Statistic.Label>Collections</Statistic.Label>
                    </Statistic>
                    <Statistic>
                      <Statistic.Value>
                        {`${MyAnalysesPage.user.analyses.length}`}
                      </Statistic.Value>
                      <Statistic.Label>Reviews</Statistic.Label>
                    </Statistic>
                    <Statistic>
                      <Statistic.Value>
                        {`${MyAnalysesPage.user.profile.forkedFromTimes}`}
                      </Statistic.Value>
                      <Statistic.Label>Forks</Statistic.Label>
                    </Statistic>
                    <Statistic>
                      <Statistic.Value>3</Statistic.Value>
                      <Statistic.Label>Followers</Statistic.Label>
                    </Statistic>
                  </Statistic.Group>
                </Segment>

                {/* USER ANALYSES TABLE */}
                <Table celled striped>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colSpan="3">
                        {`${MyAnalysesPage.user.profile.fname}'s Analyses`}
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {console.log(
                      "MyAnalysesPage.user.analyses => ",
                      MyAnalysesPage.user.analyses
                    )}
                    {MyAnalysesPage.user.analyses.map(analysis => {
                      return (
                        <Table.Row key={analysis._id}>
                          <Table.Cell>
                            <NavLink to={`/analysis/${analysis._id}`}>
                              {analysis.data.header
                                ? analysis.data.header.title
                                : "untitled"}
                            </NavLink>
                          </Table.Cell>
                          {/* <Table.Cell collapsing textAlign="right">
                            {moment(analysis.hist[0].time).format(
                              "MMMM Do YYYY"
                            )}
                          </Table.Cell> */}
                        </Table.Row>
                      );
                    })}
                  </Table.Body>
                </Table>
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid>
          </Container>
        </div>
      );
    }
  }
}

export default Profile;
