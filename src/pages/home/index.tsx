import { DealsChart, UpcomingEvents } from "../../components"
import { Col, Row } from "antd"

export const Home = () => {
  return (
    <div>
      <Row gutter={[32,32]}>
        <Col xs={24} sm={24} xl={8}>
          DASHBOARDTOTALCARD
        </Col>
        <Col xs={24} sm={24} xl={8}>
          DASHBOARDTOTALCARD
        </Col>
        <Col xs={24} sm={24} xl={8}>
          DASHBOARDTOTALCARD
        </Col>
      </Row>

      <Row
        gutter={[32, 32]}
        style={
          {
            margin:'32px'
          }
        }
      >
        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{
            height:'460px'
          }}
        >
          <UpcomingEvents/>
        </Col>
        <Col
          xs={24}
          sm={24}
          xl={16}
          style={{
            height:'460px'
          }}
        >
          <DealsChart/>
        </Col>
      </Row>
    </div>
  )
}

