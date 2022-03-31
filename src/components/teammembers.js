import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMembers } from '../redux/teamMembers/memberActions'
import MembersItem from './membersItem'

const TeamMember = ({ membersData, fetchMembers }) => {
    useEffect(() => {
        fetchMembers();
    }, [fetchMembers])
    console.log(membersData)
    return (
        <div className="container">
            <div className="row">
                {membersData && membersData.Members.map(member => (
                    <MembersItem member={member} />
                ))}
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        membersData: state.members
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchMembers: () => dispatch(fetchMembers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamMember)
