import React from 'react';
import CountUp from 'react-countup';
import Typography from '@material-ui/core/Typography'

const CountUpText = (props) => {
    return (
        <CountUp
            start={0}
            delay={0}
            end={Number.parseInt(props.number)}
            duration={1.75}
            separator=","
            decimals={0}
            decimal="."
            suffix={props.fontSize === 'body1' ? ' today' : ''}
        >
            {({ countUpRef }) => (
                <Typography
                    align="centre"
                    variant={props.fontSize}
                    
                >
                    <span ref={countUpRef} />
                </Typography>
            )}
        </CountUp>
    )
}

export default CountUpText;