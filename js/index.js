const generateFileName = (filename) => {
  const file = document.createElement("h3");
  file.className = "file";
  file.innerText = filename;
  return file;
};

const createHeader = () => {
  const tr = document.createElement("tr");
  const headers = `
    <th>Rule Broken</th>
    <th>Severity</th>
    <th>Message</th>
    <th>Line no.</th>
    <th>Col no.</th>`;

  tr.innerHTML = headers;
  return tr;
};

const createIssue = ({ ruleId, severity, message, line, column }) => {
  const tr = document.createElement("tr");
  const cols = `
    <td class="${severity > 1 ? "error" : "warning"}">${ruleId}</td>
    <td>${severity}</td>
    <td>${message}</td>
    <td>${line}</td>
    <td>${column}</td>
  `;
  tr.innerHTML = cols;
  return tr;
};

const generateIssues = (issues) => {
  const table = document.createElement("table");
  const header = createHeader();
  table.className = "issues";
  table.appendChild(header);
  const issueElements = issues.map(createIssue);
  table.append(...issueElements);
  return table;
};

const generateReport = (data) => {
  const reports = document.querySelector("#reports");
  data.forEach((report) => {
    const reportContainer = document.createElement("div");
    reportContainer.className = "report";
    reportContainer.appendChild(generateFileName(report.filePath));
    reportContainer.appendChild(generateIssues(report.messages));
    reports.appendChild(reportContainer);
  });
};

const fetchReport = () => {
  fetch("data/report.json")
    .then((data) => data.json())
    .then(generateReport);
};

window.onload = fetchReport;
