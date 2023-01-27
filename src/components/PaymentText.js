import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import {useEffect} from 'react';
import Image from 'react-bootstrap/Image';
import Tooltip from 'react-bootstrap/Tooltip';
import {run as runHolder} from 'holderjs/holder';


function PaymentText(props) {
	const paymentType = props.paymentType;
	const paymentDesc = props.paymentDesc;
	const paymentHeader = props.paymentHeader;

	useEffect(() => {runHolder('image-class-name');} );
const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">{paymentHeader}</Popover.Header>
    <Popover.Body>
	{paymentDesc}
    </Popover.Body>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">{paymentType}</Button>
  </OverlayTrigger>
);


  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">{paymentDesc}</Tooltip>}
    >
      {({ ref, ...triggerHandler }) => (
        <Button
          variant="light"
          {...triggerHandler}
          className="d-inline-flex align-items-center"
        >
          <Image
            ref={ref}
            roundedCircle
            data-src="holder.js/10x10?text=image&bg=28a745&fg=FFF&auto=yes"
          />
          <span className="ms-1">{paymentType}</span>
        </Button>
      )}
    </OverlayTrigger>
  );
}

export default PaymentText;
