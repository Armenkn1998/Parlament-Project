import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import { IYear } from '../types'
import { daysOfTheWeek, daysOfTheWeekOffset, getMonthName } from '../Utils'
import { useState, useEffect } from 'react'

dayjs.extend(isBetween)

const Year = ({

  showNumberOfMonths = 12,
  monthsFrom = 1,
}: IYear): JSX.Element => {
  const _year = dayjs().year()



  const [select, setSelect] = useState<string[]>([])

  console.log(select);
  localStorage.setItem('data', JSON.stringify(select))
 
  return (
    <div className='year' data-testid='year'>
      {new Array(showNumberOfMonths).fill('').map((_, pos) => {
        const arrOffset = 1
        const month = monthsFrom + pos
        const date = `${_year}-${month}`
        const monthName = getMonthName(month)
        const totalDays = dayjs(date).daysInMonth()
        const firstDayOfWeek = dayjs(`${date}-01`).day()

        const offsetDays =
          firstDayOfWeek !== 0
            ? new Array(firstDayOfWeek - arrOffset).fill('')
            : new Array(Number(daysOfTheWeekOffset[firstDayOfWeek])).fill('')

        const daysArr = new Array(totalDays).fill('')
           return (
          <div key={pos} className='month' data-testid='month'>
            <div className='month_box'>
              <h3 className='monthName'>{monthName}</h3>
            </div>
            <div className='dayOfTheWeek'>
              {daysOfTheWeek.map((dayOfTheWeek, pos) => {
                return (
                  <div key={pos} className='days'>
                    {dayOfTheWeek}
                  </div>
                )
              })}
            </div>

            <div className='content'>
              {offsetDays.map((_, pos) => {
                return <div key={pos} className='day' />
              })}

              {daysArr.map((_, pos) => {
                const day = pos + arrOffset;
                const id = monthName + day


                return (
                  <div
                    onClick={() => {

                      if (select.indexOf(id) >= 0) {
                        setSelect(select.filter((el: string) => {
                          return el !== id
                        }));
                        
                      } if (select.indexOf(id) < 0) {
                        setSelect([...select,id])
                        select.push(id);               
                      }

                    }}
                    key={pos}
                    className={select.indexOf(id) >= 0 ? `checkday` : `day`}
                  >
                    <p className={select.indexOf(id) >= 0 ? `spanCheckday ` : `day`}>{day}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Year
