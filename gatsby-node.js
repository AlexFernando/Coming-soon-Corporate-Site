/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const portfolio = require('./src/data/portfolio.json')

const IMAGE_PATH = './src/assets';

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    portfolio.forEach((service) => {

      const { title, category, description, image, alt} = service;
  
      // name, extension and absolute path are required to build a File node
      const { name, ext } = path.parse(image);
      const absolutePath = path.resolve(__dirname, IMAGE_PATH, image);
  
      // this data corresponds to a File node that Sharp can process
      const data = {
        name,
        ext,
        absolutePath, // <-- required
        extension: ext.substring(1), // <-- required, remove the dot in `ext`
      };
  
      // build and create the image node
      const imageNode = {
        ...data,
        id: createNodeId(`service-image-${name}`),
        internal: {
          type: 'ServicesImage',
          contentDigest: createContentDigest(data),
        },
      };
  
      actions.createNode(imageNode);
  
      const node = {
        title,
        category,
        description,
        // when imageNode is created, the sharp plugin adds childImageSharp to the node
        // so it will be available under the `image` field.
        image: imageNode,
        alt,
        id: createNodeId(`service-${title}`),
        internal: {
          type: 'Services',
          contentDigest: createContentDigest(service),
        },
      };
  
      actions.createNode(node);
    });
  };

