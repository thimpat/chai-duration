const convertToMs = function (duration)
{
    const strDuration = ("" + duration).toLowerCase().trim();

    // Convert seconds to ms
    if (strDuration.endsWith("h") || /hours?/.test(strDuration) || strDuration.indexOf("hour") > -1)
    {
        return parseInt(duration) * 3600 * 1000;
    }

    if (strDuration.endsWith("m") || strDuration.endsWith("mn") || strDuration.endsWith("mns") || /mins?/.test(strDuration) || strDuration.indexOf("minute") > -1)
    {
        return parseInt(duration) * 60 * 1000;
    }

    if (strDuration.endsWith("s"))
    {
        return parseInt(duration) * 1000;
    }

    return duration
};

/**
 * @see https://stackoverflow.com/questions/11909457/how-to-parse-a-duration-string-into-seconds-with-javascript
 * @param str
 * @returns {number}
 */
function getSeconds(str)
{
    let seconds = 0;
    const days = str.match(/(\d+)\s*d/);
    const hours = str.match(/(\d+)\s*h/);
    const minutes = str.match(/(\d+)\s*m/);

    let sec = str.match(/(\d+)\s*s/) || 0;
    if (days)
    {
        seconds += parseInt(days[1]) * 86400;
    }
    if (hours)
    {
        seconds += parseInt(hours[1]) * 3600;
    }
    if (minutes)
    {
        seconds += parseInt(minutes[1]) * 60;
    }
    if (sec)
    {
        seconds += parseInt(sec[1]);
    }
    return seconds;
}

const getMilliseconds = function (input)
{
    try
    {
        return getSeconds(input) * 1000;
    }
    catch (e)
    {
    }

    return convertToMs(input);
};

const convertDateToDuration = function (date)
{
    try
    {
        if (date instanceof Date)
        {
            return date.getTime();
        }
    }
    catch (e)
    {
    }

    return getMilliseconds(date);
};

module.exports.getMilliseconds = getMilliseconds;
module.exports.convertToMs = convertToMs;
module.exports.convertDateToDuration = convertDateToDuration;
