using Microsoft.EntityFrameworkCore;
using pet_backend.Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//------------------------------------------------------------------------------
//congig DB
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("ApplicationDbContext");
    options.UseSqlServer(connectionString);
});

//------------------------------------------------------------------------------

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(options =>
{
    options
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
});


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
