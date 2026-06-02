import { StyledDashboardCard } from './style'
// Utilizar props para estilizar props
export default function DashBoardCard({ colSpan, rowSpan,mobileRowSpan , title, description, content }) {
    return (
        <StyledDashboardCard $colSpan={colSpan} $rowSpan={rowSpan} $mobileRowSpan={mobileRowSpan}>
            <div >
            <h3>{title}</h3>
            <p>{description}</p>
            </div>
            {content}
        </StyledDashboardCard>
    )
} 