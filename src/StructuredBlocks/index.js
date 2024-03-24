import { Card } from "primereact/card";

/** @jsxImportSource @emotion/react */
import * as styles from "./index.style";

const StructuredBlocks = (props) => {
  const {} = props;

  return (
    <div css={styles.cardWrapper}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          minWidth: "375px",
          marginRight: "10px",
        }}
      >
        <Card title="Simple Card">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero a
          </p>
        </Card>
        <Card title="Simple Card">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
      </div>
      <div css={styles.secondWrapper}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            // marginTop: "15px",
            marginBottom: "10px",
            marginRight: "10px",
            minWidth: "350px",
          }}
        >
          <Card title="Simple Card">
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </Card>
          <Card title="Simple Card">
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </Card>
        </div>
        <Card title="Simple Card">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
      </div>
    </div>
  );
};

export default StructuredBlocks;
