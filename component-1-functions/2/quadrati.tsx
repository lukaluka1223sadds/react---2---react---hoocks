import { Col, Row } from "antd"
import styles from "./page.module.css"


type CartItem = {
    id: number;
    userId: number;
    date: string;
    products: any[]; 
};

type Prop = {
    prop: CartItem[]; 
};

export default function Quadrati({ prop }: Prop) {
    return (
        <div>
            <Row>
            {prop.map((item) => (
                <div key={item.id} style={{ height: 100, width: 150, backgroundColor: "black", margin: "10px" , padding:15}}>
                    <Col>
                        <p style={{ color: "white" }}>User  ID: {item.userId}</p>
                        <p style={{ color: "white" }}>Date: {item.date}</p>
                    </Col>
                </div>
            ))}
            </Row>
        </div>
    );
}