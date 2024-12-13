import { BodyLong, Heading, Loader, Table } from "@navikt/ds-react";
import useGetAnsatte from "../api/apiService";
import { Ansatte } from "../types/Ansatte";
import styles from "./TemplatePage.module.css";

export default function TemplatePage() {
  const { data, isLoading } = useGetAnsatte();

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader size="3xlarge" title="Henter data..." />
      </div>
    );
  }

  return (
    <>
      <div className={styles["template-header"]}>
        <Heading spacing level="1" size="large">
          Venteregister
        </Heading>
        <BodyLong>Her kommer venteregister!!</BodyLong>
      </div>

      <div className={styles["template-body"]}>
        <Heading spacing level="2" size="medium">
          Ansatte
        </Heading>

        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col">Id</Table.HeaderCell>
              <Table.HeaderCell scope="col">Navn</Table.HeaderCell>
              <Table.HeaderCell scope="col">Yrke</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data?.map((ansatte: Ansatte) => {
              return (
                <Table.Row key={ansatte.id}>
                  <Table.HeaderCell scope="row">{ansatte.id}</Table.HeaderCell>
                  <Table.DataCell>{ansatte.name}</Table.DataCell>
                  <Table.DataCell>{ansatte.profession}</Table.DataCell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
