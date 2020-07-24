import React from 'react';
import { Row, Col} from 'antd';
import Image from './Image';
import './ImageGrid.css'

class ImageGrid extends React.Component {
    render() {
        let images = this.props.images;
        let imagesToRender = [];
        if (images) {
            var totalNumOfImages = images.length;
            for (var i = 0; i < totalNumOfImages - 1; i+=2) {
                var col1 = images[i];
                var col2 = images[i + 1];
                imagesToRender.push(
                    <Row justify="space-between" className="Row">
                        <Col className="Col" span={12}>
                            <Image {...col1}/>
                        </Col>
                        <Col className="Col" span={12}>
                            <Image {...col2}/>
                        </Col>
                    </Row>
                );
            }

            if (totalNumOfImages % 2 === 1) {
                var lastImage = images[totalNumOfImages - 1];
                imagesToRender.push(
                    <Row justify="center" className="Row">
                        <Col className="Col" span={12}>
                            <Image {...lastImage}/>
                        </Col>
                    </Row>
                )
            }
        }
        
        return (
            <div>
                {imagesToRender}
            </div>
            
        )
    }
}

export default ImageGrid;