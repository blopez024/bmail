import emails from '../data/emails.json'

/**
 * @param {object} date to be trimmed
 * @return {string} ISO date with the seconds trimmed off
 */
function trimSeconds (date: Date): string {
  return new Date(date).toISOString().split('.')[0] + 'Z'
}

/**
   * @return {string} one month and two days ago
   */
function lastMonth (): Date {
  const date = new Date()
  date.setMonth(date.getMonth() - 1)
  date.setDate(date.getDate() - 2)
  return new Date(date)
}

/**
   * @return {string} one week ago
   */
function lastWeek (): Date {
  const date = new Date()
  date.setDate(date.getDate() - 7)
  return new Date(date)
}
/**
 * Pushes emails to json file
 */
function pushEmails (): void {
  let id = emails.length + 1

  emails.push({
    id: id++,
    from: 'Bob Dylan',
    email: 'bob@bob.com',
    subject: 'Fancy a brew tonight?',
    received: trimSeconds(new Date()),
    content: '',
    trash: false
  })

  emails.push({
    id: id++,
    from: 'Lt. Dish',
    email: 'ltdish@mash4077.dod.gov',
    subject: 'Meet me in the supply room?',
    received: trimSeconds(lastWeek()),
    content: '',
    trash: false
  })

  emails.push({
    id: id++,
    from: 'Big Bird',
    email: 'bigbird@pbs.org',
    subject: 'Have you seen my car keys??',
    received: trimSeconds(lastMonth()),
    content: '',
    trash: false
  })
}

export { pushEmails }
