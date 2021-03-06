﻿using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Web.Model;
using Web.Repository;

namespace Web.Controllers
{
    public class ApiController : Controller
    {
        private readonly INameRankRepository _repository;

        public ApiController(INameRankRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetAllNames()
        {
            return new ObjectResult(_repository.GetAllNames());
        }

        [HttpGet]
        public IActionResult GetTopNames(string sex, int count)
        {
            return new ObjectResult(_repository.GetTopNames(count, sex.ToEnum()));
        }

        [HttpGet]
        public IActionResult GetByName(string name)
        {
            return new ObjectResult(_repository.GetByName(name));
        }

        [HttpGet]
        public IActionResult GetStatsByName(string name)
        {
            var nameStatistics = _repository.GetStatsByName(name).ToList();
            var statsArray = new int[nameStatistics.Count(), 2];

            for (var x = 0; x < nameStatistics.Count(); x++)
            {
                statsArray[x, 0] = nameStatistics[x].Year;
                statsArray[x, 1] = nameStatistics[x].Total;
            }

            return new ObjectResult(statsArray);
        }

        [HttpGet]
        public IActionResult GetNamesByRank(int rank, string sex)
        {
            var nameStatistics = _repository.GetNamesByRank(rank, sex.ToEnum(), 5)
                    .Select(n => new PieChartData {Label = n.Name, Data = n.Total});

            return new ObjectResult(nameStatistics);
        }

        [HttpGet]
        public IActionResult GetByYear(int year, string sex)
        {
            return new ObjectResult(_repository.GetByYear(year, sex.ToEnum()));
        }
    }
}
