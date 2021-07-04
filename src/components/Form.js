import React, { Component } from 'react'
import AccountInfo from './AccountInfo'
import PaymentInfo from './PaymentInfo'
import PersonalInfo from './PersonalInfo'
import Progressbar from './Progressbar'
import Success from './Success'

export default class Form extends Component {
    render() {
        return (
            <div className="row">
              <div className="col-md-12 mx-0">
                <form id="msform">
                  {/* <!-- progressbar --> */}
                  <Progressbar />
                  {/* <!-- fieldsets --> */}
                  <AccountInfo />
                  <PersonalInfo />
                  <PaymentInfo />
                  <Success />
                </form>
              </div>
            </div>
        )
    }
}
