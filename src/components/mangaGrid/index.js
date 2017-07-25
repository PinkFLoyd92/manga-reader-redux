import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import MangaCard from '../manga';

const styleSheet = createStyleSheet('FullWidthGrid', theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

class MangaGrid extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.loadMangas()
            .then((param) => {
                console.info('LEARNING HOW AXIOS WORKS',param);
            })
            .catch(response => {
                console.info('CHECKING SERVER\'S RESPONSE: ', response);
            });
    }

    componentDidMount() {
    }

    render(){
        const mangas = this.props.mangas;
        if(!mangas) return (
          <div>
            THERE ARE NO AVAILABLE MANGAS YET
          </div>
        );
        const cards = mangas.map( value => {
            return <Grid item xs={3} sm={2}>
                <Manga img={value.img} description={value.description}/>
                </Grid>;
        });
        return(
<div className="root">
                {cards.length > 0 && <Grid container gutter={24}>
                {cards}
                 </Grid>
      }
    </div>
        );

    }
}

export default withStyles(styleSheet)(MangaGrid);
