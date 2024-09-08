describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server on submitServerInfo() with empty input', function() {
    serverNameInput.value = ''
    submitServerInfo()
    expect(Object.keys(allServers).length).toEqual(0)
  })

  it('should update #servertable on updateServerTable()', function () {
   
    let liveTableList = document.querySelectorAll("#serverTable tbody tr td")

    submitServerInfo()
    updateServerTable()

    expect((liveTableList.length).toEqual(3))

    expect((liveTableList[0].innerText).toEqual('Alice'))
    expect((liveTableList[1].innerText).toEqual('$0.00'))
    expect((liveTableList[2].innerText).toEqual('X'))
  })

  afterEach(function() {
    // teardown logic
    // Expected to clear all the input fields and the table
    serverId = 0
    serverTbody.innerText = ""
    allServers = {}
    
  });
});
