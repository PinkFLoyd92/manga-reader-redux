import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('card', {
    card: {
        maxWidth: 345,
    },
});


class MangaCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
      <div>
        <Card className="card">
          <CardMedia>
                <img src={this.props.img} alt={this.props.description} />
          </CardMedia>
          <CardContent>
            <Typography type="headline" component="h2">
              Lizard
            </Typography>
            <Typography component="p">
                {this.props.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button dense color="primary">
            </Button>
            <Button dense color="primary">
            </Button>
          </CardActions>
        </Card>
      </div>

        );
    }
}

export default withStyles(styleSheet)(MangaCard);
