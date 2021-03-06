$(document).ready(function() {
  $("#_all").click(function(e) {
    e.preventDefault();
    $("#_role").val("");
    search("", $("#_search").val());
    $("#_all").addClass("btn-primary");
    return false;
  });
  $("#_users").click(function(e) {
    e.preventDefault();
    $("#_role").val("user");
    search("user", $("#_search").val());
    $("#_users").addClass("btn-primary");
    return false;
  });
  $("#_managers").click(function(e) {
    e.preventDefault();
    $("#_role").val("manager");
    search("manager", $("#_search").val());
    $("#_managers").addClass("btn-primary");
    return false;
  });
  $("#_admins").click(function(e) {
    e.preventDefault();
    $("#_role").val("admin");
    search("admin", $("#_search").val());
    $("#_admins").addClass("btn-primary");
    return false;
  });
});

function search(role, search){
  $("form .btn").removeClass("btn-primary");
  $.ajax({
    type: "GET",
    url: "/admin/users",
    data: {role: role, search: search},
    dataType: 'script',
  });
  $("#export-csv").attr("href", "/admin/users.csv?utf8=%E2%9C%93&search=" + search + "&role=" + role);
  $("#export-xls").attr("href", "/admin/users.xls?utf8=%E2%9C%93&search=" + search + "&role=" + role);
}

