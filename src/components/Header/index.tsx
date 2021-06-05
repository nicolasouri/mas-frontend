import {Container, Content} from './styles'

interface HeaderProps{
    onOpenNewActivityModal: () => void
    onOpenNewCourseUnitModal: () => void
}

export function Header ({onOpenNewActivityModal, onOpenNewCourseUnitModal}: HeaderProps){
    return(
        <Container>
            <Content>
                <h1>My Activities Space</h1>
                <div>
                    <button
                        type="button"
                        onClick={onOpenNewCourseUnitModal}
                    >
                        Nova Unidade Curricular
                    </button>
                    <button
                        type="button"
                        onClick={onOpenNewActivityModal}
                    >
                        Nova Atividade
                    </button>
                </div>
            </Content>
        </Container>
    )
}