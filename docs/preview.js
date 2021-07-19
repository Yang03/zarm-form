import { addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

addDecorator(withInfo)


addParameters({
  info: {
    inline: true,
    source: false,
    header: false,
    
    styles: stylesheet => ({
        // Setting the style with a function
        ...stylesheet,
        // infoBody: {
        //     ...stylesheet.infoBody,
        //     padding: '20px 40px 20px'
        // },
        // header: {
        //   ...stylesheet.header,
        //   h1: {
        //     ...stylesheet.header.h1,
        //   },
        // },
    }),
  }
})