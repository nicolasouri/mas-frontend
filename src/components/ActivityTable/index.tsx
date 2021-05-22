import { Container } from "./styles";

export function ActivityTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Unidade Curricular</th>
                        <th>Atividade</th>
                        <th>Avaliação</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Programação Web</td>
                        <td>Desenvolvimento</td>
                        <td>8.00</td>
                        <td>05/05/2021</td>
                    </tr>
                    <tr>
                        <td>Programação Web</td>
                        <td>Desenvolvimento</td>
                        <td>10.00</td>
                        <td>05/05/2021</td>
                    </tr>
                    <tr>
                        <td>Programação Web</td>
                        <td>Desenvolvimento</td>
                        <td>7.00</td>
                        <td>05/05/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}