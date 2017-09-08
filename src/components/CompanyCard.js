import React from 'react';

class CompanyCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { company } = this.props;
    return (
      <div className="ui items segment">
        <div className="item">
          <div className="image">
            <img src={company.imageSrc} alt="Company Logo" />
          </div>
          <div className="content">
            <a className="header">Header</a>
            <div className="meta">
              <span>Description</span>
            </div>
            <div className="description">
              <p></p>
            </div>
            <div className="extra">
              <div className="ui label">IMAX</div>
              <div className="ui label"><i className="globe icon"></i> Additional Languages</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CompanyCard.propTypes = {
  company: React.PropTypes.object.isRequired
}

export default CompanyCard;