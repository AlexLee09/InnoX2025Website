import React from 'react'
import { competitionInfo,} from '@/constants'


type competitionPageProps = {
    params: {
        competition: string;
    }
}

type CompetitionInfo = {
    name: string,
    title: string,
    content: string,
    links: object[],
    signupFormLink: string

}

const CompetitionPage = ({params: {competition}}: competitionPageProps) => {
    const targetCompetition: string = competition;
    const specificCompetitionInfo: CompetitionInfo | undefined = competitionInfo.find(competition => competition.name == targetCompetition)
    console.log(specificCompetitionInfo)
    console.log(targetCompetition)
    return (
        <div>
            <h1>{specificCompetitionInfo?.name ?? "Competition Not Found"}</h1>
        </div>
    )
}

export default CompetitionPage